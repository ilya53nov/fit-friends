import { Module } from '@nestjs/common';
import { FoodDiaryService } from './food-diary.service';
import { FoodDiaryController } from './food-diary.controller';

@Module({
  controllers: [FoodDiaryController],
  providers: [FoodDiaryService],
})
export class FoodDiaryModule {}
