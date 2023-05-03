import { PurchasesController } from '../purchases.controller';
import { PurchasesService } from '../purchases.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { PurchasesTestDescription } from './purchases-test.constants'
import { PurchaseRdo } from '@fit-friends/shared-rdo';

const mockService = {
  findAll: jest.fn().mockResolvedValue(fillObject(PurchaseRdo, Mocks.PurchasesMock.Purchase)),
  create: jest.fn().mockResolvedValue(fillObject(PurchaseRdo, Mocks.PurchasesMock.Purchase)),
};

describe(PurchasesTestDescription.Controller, () => {
  let purchasesController: PurchasesController;
  let purchasesService: PurchasesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PurchasesService],
      controllers: [PurchasesController],
    })
      .overrideProvider(PurchasesService)
      .useValue(mockService)
      .compile();

    purchasesService = module.get<PurchasesService>(PurchasesService);
    purchasesController = module.get<PurchasesController>(PurchasesController);

    jest.clearAllMocks();
  });

  test(PurchasesTestDescription.FindAll, async () => {
    const result = await purchasesController.findAll(Mocks.UsersMock.User.id, Mocks.QueryMock);
    expect(purchasesService.findAll).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.QueryMock);
    expect(result).toMatchObject(fillObject(PurchaseRdo, Mocks.PurchasesMock.Purchase));
  });

  test(PurchasesTestDescription.Create, async () => {
    const result = await purchasesController.create(Mocks.UsersMock.User.id, Mocks.ExercisesMock.Exercise.id, Mocks.PurchasesMock.CreatePurchaseDto);
    expect(purchasesService.create).toBeCalledWith(Mocks.PurchasesMock.CreatePurchaseDto, Mocks.ExercisesMock.Exercise.id, Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(PurchaseRdo, Mocks.PurchasesMock.Purchase));
  });

});
