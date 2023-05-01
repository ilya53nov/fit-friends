import { ExercisesController } from '../exercises.controller';
import { ExercisesService } from '../exercises.service';
import { Test } from '@nestjs/testing';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import { fillObject } from '@fit-friends/core';
import { ExercisesMock } from './mocks';
import { ExecisesTestDescription } from './exercises-test.constants'

const mockExercisesService = {
  create: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, ExercisesMock.CreateExerciseDto)),
  findAllByCoachId: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, ExercisesMock.CreateExerciseDto)),
  findAll: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, ExercisesMock.CreateExerciseDto)),
  findOne: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, ExercisesMock.CreateExerciseDto)),
  update: jest.fn().mockResolvedValue(fillObject(ExerciseRdo, ExercisesMock.CreateExerciseDto)),
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
    const result = await exercisesController.create('123', ExercisesMock.CreateExerciseDto);
    expect(exercisesService.create).toBeCalledWith('123', ExercisesMock.CreateExerciseDto);
    expect(result).toMatchObject(fillObject(ExerciseRdo, ExercisesMock.CreateExerciseDto));
  });

});
