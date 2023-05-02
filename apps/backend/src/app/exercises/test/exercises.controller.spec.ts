import { ExercisesController } from '../exercises.controller';
import { ExercisesService } from '../exercises.service';
import { Test } from '@nestjs/testing';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { ExecisesTestDescription } from './exercises-test.constants'

const mockExercisesService = {
  create: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise)),
  findAllByCoachId: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise)),
  findAll: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise)),
  findOne: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise)),
  update: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise)),
};

describe(ExecisesTestDescription.Controller, () => {
  let exercisesController: ExercisesController;
  let exercisesService: ExercisesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExercisesService],
      controllers: [ExercisesController],
    })
      .overrideProvider(ExercisesService)
      .useValue(mockExercisesService)
      .compile();

    exercisesService = module.get<ExercisesService>(ExercisesService);
    exercisesController = module.get<ExercisesController>(ExercisesController);

    jest.clearAllMocks();
  });

  test(ExecisesTestDescription.Create, async () => {
    const result = await exercisesController.create(Mocks.UsersMock.User.id, Mocks.ExercisesMock.CreateExerciseDto);
    expect(exercisesService.create).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.ExercisesMock.CreateExerciseDto);
    expect(result).toMatchObject(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise));
  });

  test(ExecisesTestDescription.FindAllByCoachId, async () => {
    const result = await exercisesController.findAllByCoachId(Mocks.UsersMock.User.id, Mocks.QueryMock);
    expect(exercisesService.findAllByCoachId).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.QueryMock);
    expect(result).toMatchObject(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise));
  }); 

  test(ExecisesTestDescription.FindAll, async () => {
    const result = await exercisesController.findAll(Mocks.QueryMock);
    expect(exercisesService.findAll).toBeCalledWith(Mocks.QueryMock);
    expect(result).toMatchObject(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise));
  }); 

  test(ExecisesTestDescription.FindOne, async () => {
    const result = await exercisesController.findOne(Mocks.ExercisesMock.Exercise.id);
    expect(exercisesService.findOne).toBeCalledWith(Mocks.ExercisesMock.Exercise.id);
    expect(result).toMatchObject(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise));
  }); 

  test(ExecisesTestDescription.Update, async () => {
    const result = await exercisesController.update(Mocks.ExercisesMock.Exercise.id, Mocks.UsersMock.User.id, Mocks.ExercisesMock.UpdateExerciseDto);
    expect(exercisesService.update).toBeCalledWith(Mocks.ExercisesMock.Exercise.id, Mocks.UsersMock.User.id, Mocks.ExercisesMock.UpdateExerciseDto);
    expect(result).toMatchObject(fillObject(ExerciseRdo, Mocks.ExercisesMock.Exercise));
  }); 

});
