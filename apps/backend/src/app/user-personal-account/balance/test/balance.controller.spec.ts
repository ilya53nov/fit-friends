import { BalanceController } from '../balance.controller';
import { BalanceService } from '../balance.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../../mocks/mocks';
import { BalanceTestDescription } from './balance-test.constants'
import { UserBalanceRdo } from '@fit-friends/shared-rdo';

const mockService = {
  findAll: jest.fn().mockResolvedValue(fillObject(UserBalanceRdo, Mocks.BalanceMock.UserBalance)),
  increment: jest.fn().mockResolvedValue(undefined),
  decrement: jest.fn().mockResolvedValue(undefined),
};

describe(BalanceTestDescription.Controller, () => {
  let balanceController: BalanceController;
  let balanceService: BalanceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BalanceService],
      controllers: [BalanceController],
    })
      .overrideProvider(BalanceService)
      .useValue(mockService)
      .compile();

    balanceService = module.get<BalanceService>(BalanceService);
    balanceController = module.get<BalanceController>(BalanceController);

    jest.clearAllMocks();
  });

  test(BalanceTestDescription.FindAll, async () => {
    const result = await balanceController.findAll(Mocks.UsersMock.User.id);
    expect(balanceService.findAll).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(UserBalanceRdo, Mocks.BalanceMock.UserBalance));
  });

  test(BalanceTestDescription.Decrement, async () => {
    const result = await balanceController.decrement(Mocks.BalanceMock.UpdateUserBalanceDto, Mocks.UsersMock.User.id);
    expect(balanceService.decrement).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.BalanceMock.UpdateUserBalanceDto);
    expect(result).toEqual(undefined);
  });

  test(BalanceTestDescription.Increment, async () => {
    const result = await balanceController.increment(Mocks.BalanceMock.UpdateUserBalanceDto, Mocks.UsersMock.User.id);
    expect(balanceService.increment).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.BalanceMock.UpdateUserBalanceDto);
    expect(result).toEqual(undefined);
  });

});
