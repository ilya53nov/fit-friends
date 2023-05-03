import { FavoriteGymController } from '../favorite-gym.controller';
import { FavoriteGymService } from '../favorite-gym.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../../mocks/mocks';
import { FavoriteGymTestDescription } from './favorite-gym-test.constants'
import {  } from '@fit-friends/shared-rdo';

const mockAuthService = {
  findAll: jest.fn().mockResolvedValue(undefined),
  delete: jest.fn().mockResolvedValue(undefined),
  create: jest.fn().mockResolvedValue(undefined),
};

describe(FavoriteGymTestDescription.Controller, () => {
  let favoriteGymController: FavoriteGymController;
  let favoriteGymService: FavoriteGymService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FavoriteGymService],
      controllers: [FavoriteGymController],
    })
      .overrideProvider(FavoriteGymService)
      .useValue(mockAuthService)
      .compile();

    favoriteGymService = module.get<FavoriteGymService>(FavoriteGymService);
    favoriteGymController = module.get<FavoriteGymController>(FavoriteGymController);

    jest.clearAllMocks();
  });

  test(FavoriteGymTestDescription.Delete, async () => {
    const result = await favoriteGymController.delete(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(favoriteGymService.delete).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.UsersMock.User.id);
    expect(result).toEqual(undefined);
  });

});
