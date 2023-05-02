import { GymsController } from '../gyms.controller';
import { GymsService } from '../gyms.service';
import { Test } from '@nestjs/testing';
import { GymRdo } from '@fit-friends/shared-rdo';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { GymsTestDescription } from './gyms-test.constants'

const mockAuthService = {
  findAll: jest.fn().mockResolvedValue(fillObject(GymRdo, Mocks.GymsMock.Gym)),
};

describe(GymsTestDescription.Controller, () => {
  let gymsController: GymsController;
  let gymsService: GymsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [GymsService],
      controllers: [GymsController],
    })
      .overrideProvider(GymsService)
      .useValue(mockAuthService)
      .compile();

    gymsService = module.get<GymsService>(GymsService);
    gymsController = module.get<GymsController>(GymsController);

    jest.clearAllMocks();
  });

  test(GymsTestDescription.FindAll, async () => {
    const result = await gymsController.findAll();
    expect(gymsService.findAll).toBeCalledWith();
    expect(result).toMatchObject(fillObject(GymRdo, Mocks.GymsMock.Gym));
  });

});
