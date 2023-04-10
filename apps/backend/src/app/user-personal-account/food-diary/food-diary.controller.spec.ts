import { Test, TestingModule } from '@nestjs/testing';
import { FoodDiaryController } from './food-diary.controller';
import { FoodDiaryService } from './food-diary.service';

describe('FoodDiaryController', () => {
  let controller: FoodDiaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodDiaryController],
      providers: [FoodDiaryService],
    }).compile();

    controller = module.get<FoodDiaryController>(FoodDiaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
