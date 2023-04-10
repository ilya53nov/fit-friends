import { Injectable } from '@nestjs/common';
import { CreateExerciseDiaryDto } from './dto/create-exercise-diary.dto';
import { UpdateExerciseDiaryDto } from './dto/update-exercise-diary.dto';

@Injectable()
export class ExerciseDiaryService {
  create(createExerciseDiaryDto: CreateExerciseDiaryDto) {
    return 'This action adds a new exerciseDiary';
  }

  findAll() {
    return `This action returns all exerciseDiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseDiary`;
  }

  update(id: number, updateExerciseDiaryDto: UpdateExerciseDiaryDto) {
    return `This action updates a #${id} exerciseDiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseDiary`;
  }
}
