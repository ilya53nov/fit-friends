import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ExerciseDiaryRepository } from './exercise-diary.repository';
import { ExerciseDiaryEntity } from './exercise-diary.entity';
import { fillObject } from '@fit-friends/core';
import { ExerciseDiaryRdo } from '@fit-friends/shared-rdo';
import { CreateExerciseDiaryDto, UpdateExerciseDiaryDto } from '@fit-friends/shared-dto';
import { ExerciseDiaryDescription } from './exercise-diary.constants';
import { ExercisesRepository } from '../../exercises/exercises.repository';
import { ExercisesDescription } from '../../exercises/exercises.constants';

@Injectable()
export class ExerciseDiaryService {
  constructor(
    private readonly exerciseDiaryRepository: ExerciseDiaryRepository,
    private readonly exercisesRepository: ExercisesRepository,
  ) {}  

  private async isCreatedForDate(date: Date, userId: string, exerciseId: string) {
    const findedAll = await this.findAll(userId);

    return findedAll.some((item) => item.date.getDate() === date.getDate() && item.exerciseId === exerciseId);
  }

  public async create(createExerciseDiaryDto: CreateExerciseDiaryDto, userId: string) {
    if (await this.isCreatedForDate(createExerciseDiaryDto.date, userId, createExerciseDiaryDto.exerciseId)) {
      throw new ConflictException(ExerciseDiaryDescription.ExistDate);
    }
    
    const exercise = await this.exercisesRepository.findById(createExerciseDiaryDto.exerciseId);

    if (!exercise) {
      throw new NotFoundException(ExercisesDescription.NotFound);
    }
    
    const entity = await new ExerciseDiaryEntity({...createExerciseDiaryDto, userId});

    const newExerciseDiary = await this.exerciseDiaryRepository.create(entity);

    return fillObject(ExerciseDiaryRdo, newExerciseDiary) ;
  }

  public async findAll(userId: string) {
    const finded = await this.exerciseDiaryRepository.findAll(userId);

    return finded.map((item) => fillObject(ExerciseDiaryRdo, item));
  }

  public async update(exerciseDiaryid: string, userId: string, updateExerciseDiaryDto: UpdateExerciseDiaryDto) {
    const existExerciseDiary = await this.exerciseDiaryRepository.findById(exerciseDiaryid);

    if (!existExerciseDiary) {
      throw new NotFoundException(ExerciseDiaryDescription.NotFound);
    }

    if (existExerciseDiary.userId !== userId) {
      throw new ForbiddenException(ExerciseDiaryDescription.NotOwner);
    }

    const exrciseDiaryEntity = await new ExerciseDiaryEntity({...existExerciseDiary, ...updateExerciseDiaryDto});

    const updatedExerciseDiary = await this.exerciseDiaryRepository.update(exerciseDiaryid, exrciseDiaryEntity);

    return fillObject(ExerciseDiaryRdo, updatedExerciseDiary);
  }

}
