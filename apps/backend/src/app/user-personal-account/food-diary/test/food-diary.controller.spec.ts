import { FoodDiaryController } from '../food-diary.controller';
import { FoodDiaryService } from '../food-diary.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../../mocks/mocks';
import { FoodDiaryTestDescription } from './food-diary-test.constants'
import { FoodDiaryRdo } from '@fit-friends/shared-rdo';

const mockService = {
  findAll: jest.fn().mockResolvedValue(fillObject(FoodDiaryRdo, Mocks.FoodDiaryMock.FoodDiary)),
  create: jest.fn().mockResolvedValue(fillObject(FoodDiaryRdo, Mocks.FoodDiaryMock.FoodDiary)),
  update: jest.fn().mockResolvedValue(fillObject(FoodDiaryRdo, Mocks.FoodDiaryMock.FoodDiary)),
};

describe(FoodDiaryTestDescription.Controller, () => {
  let foodDiaryController: FoodDiaryController;
  let foodDiaryService: FoodDiaryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoodDiaryService],
      controllers: [FoodDiaryController],
    })
      .overrideProvider(FoodDiaryService)
      .useValue(mockService)
      .compile();

      foodDiaryService = module.get<FoodDiaryService>(FoodDiaryService);
      foodDiaryController = module.get<FoodDiaryController>(FoodDiaryController);

    jest.clearAllMocks();
  });

  test(FoodDiaryTestDescription.FindAll, async () => {
    const result = await foodDiaryController.findAll(Mocks.UsersMock.User.id);
    expect(foodDiaryService.findAll).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(FoodDiaryRdo, Mocks.FoodDiaryMock.FoodDiary));
  });

  test(FoodDiaryTestDescription.Create, async () => {
    const result = await foodDiaryController.create(Mocks.UsersMock.User.id, Mocks.FoodDiaryMock.CreateFoodDiaryDto);
    expect(foodDiaryService.create).toBeCalledWith(Mocks.FoodDiaryMock.CreateFoodDiaryDto, Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(FoodDiaryRdo, Mocks.FoodDiaryMock.FoodDiary));
  });

  test(FoodDiaryTestDescription.Update, async () => {
    const result = await foodDiaryController.update(Mocks.UsersMock.User.id, Mocks.ExerciseDiaryMock.ExerciseDiary.id, Mocks.FoodDiaryMock.UpdateFoodDiaryDto);
    expect(foodDiaryService.update).toBeCalledWith(Mocks.ExerciseDiaryMock.ExerciseDiary.id, Mocks.UsersMock.User.id, Mocks.FoodDiaryMock.UpdateFoodDiaryDto);
    expect(result).toMatchObject(fillObject(FoodDiaryRdo, Mocks.FoodDiaryMock.FoodDiary));
  });

});
