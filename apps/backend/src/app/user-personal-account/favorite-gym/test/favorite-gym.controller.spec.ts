import { FavoriteGymController } from '../favorite-gym.controller';
import { FavoriteGymService } from '../favorite-gym.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../../mocks/mocks';
import { FavoriteGymTestDescription } from './favorite-gym-test.constants'
import { FavoriteGymRdo } from '@fit-friends/shared-rdo';

const mockService = {
  findAll: jest.fn().mockResolvedValue(fillObject(FavoriteGymRdo, Mocks.FavoriteGymMock.FavoriteGym)),
  delete: jest.fn().mockResolvedValue(undefined),
  create: jest.fn().mockResolvedValue(fillObject(FavoriteGymRdo, Mocks.FavoriteGymMock.FavoriteGym)),
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
      .useValue(mockService)
      .compile();

    favoriteGymService = module.get<FavoriteGymService>(FavoriteGymService);
    favoriteGymController = module.get<FavoriteGymController>(FavoriteGymController);

    jest.clearAllMocks();
  });

  test(FavoriteGymTestDescription.Delete, async () => {
    const result = await favoriteGymController.delete(Mocks.UsersMock.User.id, Mocks.GymsMock.Gym.id);
    expect(favoriteGymService.delete).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.GymsMock.Gym.id);
    expect(result).toEqual(undefined);
  });

  test(FavoriteGymTestDescription.Create, async () => {
    const result = await favoriteGymController.create(Mocks.UsersMock.User.id, Mocks.GymsMock.Gym.id);
    expect(favoriteGymService.create).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.GymsMock.Gym.id);
    expect(result).toMatchObject(fillObject(FavoriteGymRdo, Mocks.FavoriteGymMock.FavoriteGym));
  });

  test(FavoriteGymTestDescription.FindAll, async () => {
    const result = await favoriteGymController.findAll(Mocks.UsersMock.User.id);
    expect(favoriteGymService.findAll).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(FavoriteGymRdo, Mocks.FavoriteGymMock.FavoriteGym));
  });

});
