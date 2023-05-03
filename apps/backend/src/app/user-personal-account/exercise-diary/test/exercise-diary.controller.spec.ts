import { ExerciseDiaryController } from '../exercise-diary.controller';
import { ExerciseDiaryService } from '../exercise-diary.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../../mocks/mocks';
import { ExerciseDiaryTestDescription } from './exercise-diary-test.constants'
import { ExerciseDiaryRdo } from '@fit-friends/shared-rdo';

const mockAuthService = {
  findAll: jest.fn().mockResolvedValue(fillObject(ExerciseDiaryRdo, Mocks.ExerciseDiaryMock.ExerciseDiary)),
  create: jest.fn().mockResolvedValue(fillObject(ExerciseDiaryRdo, Mocks.ExerciseDiaryMock.ExerciseDiary)),
  update: jest.fn().mockResolvedValue(fillObject(ExerciseDiaryRdo, Mocks.ExerciseDiaryMock.ExerciseDiary)),
};

describe(ExerciseDiaryTestDescription.Controller, () => {
  let exerciseDiaryController: ExerciseDiaryController;
  let exerciseDiaryService: ExerciseDiaryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExerciseDiaryService],
      controllers: [ExerciseDiaryController],
    })
      .overrideProvider(ExerciseDiaryService)
      .useValue(mockAuthService)
      .compile();

      exerciseDiaryService = module.get<ExerciseDiaryService>(ExerciseDiaryService);
    exerciseDiaryController = module.get<ExerciseDiaryController>(ExerciseDiaryController);

    jest.clearAllMocks();
  });

  test(ExerciseDiaryTestDescription.FindAll, async () => {
    const result = await exerciseDiaryController.findAll(Mocks.UsersMock.User.id);
    expect(exerciseDiaryService.findAll).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(ExerciseDiaryRdo, Mocks.ExerciseDiaryMock.ExerciseDiary));
  });

  test(ExerciseDiaryTestDescription.Create, async () => {
    const result = await exerciseDiaryController.create(Mocks.UsersMock.User.id, Mocks.ExerciseDiaryMock.CreateExerciseDiaryDto);
    expect(exerciseDiaryService.create).toBeCalledWith(Mocks.ExerciseDiaryMock.CreateExerciseDiaryDto, Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(ExerciseDiaryRdo, Mocks.ExerciseDiaryMock.ExerciseDiary));
  });

  test(ExerciseDiaryTestDescription.Update, async () => {
    const result = await exerciseDiaryController.update(Mocks.UsersMock.User.id, Mocks.ExerciseDiaryMock.ExerciseDiary.id, Mocks.ExerciseDiaryMock.UpdateExerciseDiaryDto);
    expect(exerciseDiaryService.update).toBeCalledWith(Mocks.ExerciseDiaryMock.ExerciseDiary.id, Mocks.UsersMock.User.id, Mocks.ExerciseDiaryMock.UpdateExerciseDiaryDto);
    expect(result).toMatchObject(fillObject(ExerciseDiaryRdo, Mocks.ExerciseDiaryMock.ExerciseDiary));
  });

});
