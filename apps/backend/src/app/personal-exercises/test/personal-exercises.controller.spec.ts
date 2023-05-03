import { PersonalExercisesController } from '../personal-exercises.controller';
import { PersonalExercisesService } from '../personal-exercises.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { PersonalExercisesTestDescription } from './personal-exercises-test.constants'
import { PersonalExerciseRdo } from '@fit-friends/shared-rdo';

const mockService = {
  create: jest.fn().mockResolvedValue(fillObject(PersonalExerciseRdo, Mocks.PersonalExerciseMock.PersonalExercise)),
  update: jest.fn().mockResolvedValue(fillObject(PersonalExerciseRdo, Mocks.PersonalExerciseMock.PersonalExercise)),
};

describe(PersonalExercisesTestDescription.Controller, () => {
  let personalExercisesController: PersonalExercisesController;
  let personalExercisesService: PersonalExercisesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PersonalExercisesService],
      controllers: [PersonalExercisesController],
    })
      .overrideProvider(PersonalExercisesService)
      .useValue(mockService)
      .compile();

    personalExercisesService = module.get<PersonalExercisesService>(PersonalExercisesService);
    personalExercisesController = module.get<PersonalExercisesController>(PersonalExercisesController);

    jest.clearAllMocks();
  });

  test(PersonalExercisesTestDescription.Create, async () => {
    const result = await personalExercisesController.create(Mocks.UsersMock.User.id, Mocks.PersonalExerciseMock.CreatePersonalExerciseDto);
    expect(personalExercisesService.create).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.PersonalExerciseMock.CreatePersonalExerciseDto);
    expect(result).toMatchObject(fillObject(PersonalExerciseRdo, Mocks.PersonalExerciseMock.PersonalExercise));
  });

  test(PersonalExercisesTestDescription.Update, async () => {
    const result = await personalExercisesController.update(Mocks.UsersMock.User.id, Mocks.PersonalExerciseMock.PersonalExercise.id, Mocks.PersonalExerciseMock.UpdatePersonalExerciseDto);
    expect(personalExercisesService.update).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.PersonalExerciseMock.PersonalExercise.id, Mocks.PersonalExerciseMock.UpdatePersonalExerciseDto);
    expect(result).toMatchObject(fillObject(PersonalExerciseRdo, Mocks.PersonalExerciseMock.PersonalExercise));
  });

});
