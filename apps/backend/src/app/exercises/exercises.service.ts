import { fillObject } from '@fit-friends/core';
import { CreateExerciseDto, UpdateExerciseDto } from '@fit-friends/shared-dto';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ExercisesDescription } from './exercises.constants';
import { ExerciseEntity } from './exercises.entity';
import { ExercisesRepository } from './exercises.repository';
import { ExercisesQuery } from './query/exercises.query';

@Injectable()
export class ExercisesService {
  constructor(
    private readonly exercisesRepository: ExercisesRepository,

  ) {}

  public async create(coachId: string, createExerciseDto: CreateExerciseDto) {
    const exerciseEntity = await new ExerciseEntity({...createExerciseDto, coachId, rating: 0});

    const newExercise = await this.exercisesRepository.create(exerciseEntity);

    return fillObject(ExerciseRdo, newExercise);
  }

  public async findAll(coachId: string, query: ExercisesQuery) {
    const exercises = await this.exercisesRepository.findAll(coachId, query);

    return exercises.map((item) => fillObject(ExerciseRdo, item));
  }

  public async findOne(id: string) {
    const existExercise = await this.exercisesRepository.findById(id);

    if (!existExercise) {
      throw new NotFoundException(ExercisesDescription.NotFound);
    }

    return fillObject(ExerciseRdo, existExercise);
  }

  public async update(exerciseId: string, coachId: string, updateExerciseDto: UpdateExerciseDto) {
    const existExercise = await this.exercisesRepository.findById(exerciseId);

    if (existExercise.coachId !== coachId) {
      throw new ForbiddenException(ExercisesDescription.NotOwner);
    }      

    if (!existExercise) {
      throw new NotFoundException(ExercisesDescription.NotFound);
    }    
    
    const exerciseEntity = await new ExerciseEntity({...existExercise, ...updateExerciseDto});
    const updatedExercise = await this.exercisesRepository.update(exerciseId, exerciseEntity);

    return fillObject(ExerciseRdo, updatedExercise);
  }

}
