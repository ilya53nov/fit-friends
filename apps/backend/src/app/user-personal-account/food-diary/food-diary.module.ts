import { Module } from '@nestjs/common';
import { FoodDiaryService } from './food-diary.service';
import { FoodDiaryController } from './food-diary.controller';
import { FoodDiaryRepository } from './food-diary.repository';

@Module({
  controllers: [FoodDiaryController],
  providers: [FoodDiaryService, FoodDiaryRepository],
})
export class FoodDiaryModule {}
