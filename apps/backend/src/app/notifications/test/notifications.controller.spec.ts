import { NotificationsController } from '../notifications.controller';
import { NotificationsService } from '../notifications.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { NotificationsTestDescription } from './notifications-test.constants'
import { NotificationRdo } from '@fit-friends/shared-rdo';

const mockService = {
  findAll: jest.fn().mockResolvedValue(fillObject(NotificationRdo, Mocks.NotificationsMock.Notification)),
  remove: jest.fn().mockResolvedValue(undefined),
};

describe(NotificationsTestDescription.Controller, () => {
  let notificationsController: NotificationsController;
  let notificationsService: NotificationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NotificationsService],
      controllers: [NotificationsController],
    })
      .overrideProvider(NotificationsService)
      .useValue(mockService)
      .compile();

    notificationsService = module.get<NotificationsService>(NotificationsService);
    notificationsController = module.get<NotificationsController>(NotificationsController);

    jest.clearAllMocks();
  });

  test(NotificationsTestDescription.FindAll, async () => {
    const result = await notificationsController.findAll(Mocks.UsersMock.User.id);
    expect(notificationsService.findAll).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(NotificationRdo, Mocks.NotificationsMock.Notification));
  });

  test(NotificationsTestDescription.Remove, async () => {
    const result = await notificationsController.remove(Mocks.NotificationsMock.Notification.id);
    expect(notificationsService.remove).toBeCalledWith(Mocks.NotificationsMock.Notification.id);
    expect(result).toEqual(undefined);
  });

});
