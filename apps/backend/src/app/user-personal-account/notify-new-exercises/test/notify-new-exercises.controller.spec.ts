import { NotifyNewExercisesController } from '../notify-new-exercises.controller';
import { NotifyNewExercisesService } from '../notify-new-exercises.service';
import { Test } from '@nestjs/testing';
import { Mocks } from '../../../../mocks/mocks';
import { NotifyNewExercisesTestDescription } from './notify-new-exercises-test.constants'

const mockService = {
  sendNotify: jest.fn().mockResolvedValue(undefined),
  removeSubscribe: jest.fn().mockResolvedValue(undefined),
  addSubscribe: jest.fn().mockResolvedValue(undefined),
};

describe(NotifyNewExercisesTestDescription.Controller, () => {
  let notifyNewExercisesController: NotifyNewExercisesController;
  let notifyNewExercisesService: NotifyNewExercisesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NotifyNewExercisesService],
      controllers: [NotifyNewExercisesController],
    })
      .overrideProvider(NotifyNewExercisesService)
      .useValue(mockService)
      .compile();

    notifyNewExercisesService = module.get<NotifyNewExercisesService>(NotifyNewExercisesService);
    notifyNewExercisesController = module.get<NotifyNewExercisesController>(NotifyNewExercisesController);

    jest.clearAllMocks();
  });

  test(NotifyNewExercisesTestDescription.SendNotify, async () => {
    const result = await notifyNewExercisesController.sendNotify(Mocks.UsersMock.User.id);
    expect(notifyNewExercisesService.sendNotify).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toEqual(undefined);
  });

  test(NotifyNewExercisesTestDescription.Remove, async () => {
    const result = await notifyNewExercisesController.remove(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(notifyNewExercisesService.removeSubscribe).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(result).toEqual(undefined);
  });

  test(NotifyNewExercisesTestDescription.Create, async () => {
    const result = await notifyNewExercisesController.create(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(notifyNewExercisesService.addSubscribe).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(result).toEqual(undefined);
  });

});
