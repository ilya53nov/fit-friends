import { Module } from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { ExerciseDiaryController } from './exercise-diary.controller';
import { ExerciseDiaryRepository } from './exercise-diary.repository';
import { ExercisesRepository } from '../../exercises/exercises.repository';

@Module({
  controllers: [ExerciseDiaryController],
  providers: [ExerciseDiaryService, ExerciseDiaryRepository, ExercisesRepository],
})
export class ExerciseDiaryModule {}
