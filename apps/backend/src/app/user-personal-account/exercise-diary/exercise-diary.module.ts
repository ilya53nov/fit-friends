import { Module } from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { ExerciseDiaryController } from './exercise-diary.controller';

@Module({
  controllers: [ExerciseDiaryController],
  providers: [ExerciseDiaryService],
})
export class ExerciseDiaryModule {}
