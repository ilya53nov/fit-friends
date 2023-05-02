import { FriendsController } from '../friends.controller';
import { FriendsService } from '../friends.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { FriendsTestDescription } from './friends-test.constants'
import { SportsmanUserRdo } from '@fit-friends/shared-rdo';

const mockAuthService = {
  findAll: jest.fn().mockResolvedValue(fillObject(SportsmanUserRdo, Mocks.UsersMock.User)),
  delete: jest.fn().mockResolvedValue(undefined),
  create: jest.fn().mockResolvedValue(undefined),
};

describe(FriendsTestDescription.Controller, () => {
  let friendsController: FriendsController;
  let friendsService: FriendsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FriendsService],
      controllers: [FriendsController],
    })
      .overrideProvider(FriendsService)
      .useValue(mockAuthService)
      .compile();

    friendsService = module.get<FriendsService>(FriendsService);
    friendsController = module.get<FriendsController>(FriendsController);

    jest.clearAllMocks();
  });

  test(FriendsTestDescription.FindAll, async () => {
    const result = await friendsController.findAll(Mocks.UsersMock.User.id);
    expect(friendsService.findAll).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(SportsmanUserRdo, Mocks.UsersMock.User));
  });

  test(FriendsTestDescription.Create, async () => {
    const result = await friendsController.create(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(friendsService.create).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(result).toEqual(undefined);
  });

  test(FriendsTestDescription.Delete, async () => {
    const result = await friendsController.delete(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(friendsService.delete).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(result).toEqual(undefined);
  });

});
