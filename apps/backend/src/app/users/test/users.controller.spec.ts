import { UsersController } from '../users.controller';
import { UsersService} from '../users.service';
import { Test } from '@nestjs/testing';
import { SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { UsersTestDescription } from './users-test.constants'

const mockService = {
  findAll: jest.fn().mockResolvedValue(fillObject(SportsmanUserRdo, Mocks.UsersMock.User)),
  findOne: jest.fn().mockResolvedValue(fillObject(SportsmanUserRdo, Mocks.UsersMock.User)),
  update: jest.fn().mockResolvedValue(fillObject(SportsmanUserRdo, Mocks.UsersMock.User)),
};

describe(UsersTestDescription.Controller, () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersService],
      controllers: [UsersController],
    })
      .overrideProvider(UsersService)
      .useValue(mockService)
      .compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);

    jest.clearAllMocks();
  });

  test(UsersTestDescription.FindAll, async () => {
    const result = await usersController.findAll(Mocks.QueryMock);
    expect(usersService.findAll).toBeCalledWith(Mocks.QueryMock);
    expect(result).toMatchObject(fillObject(SportsmanUserRdo, Mocks.UsersMock.User));
  });


  test(UsersTestDescription.FindOne, async () => {
    const result = await usersController.findOne(Mocks.UsersMock.User.id);
    expect(usersService.findOne).toBeCalledWith(Mocks.UsersMock.User.id);
    expect(result).toMatchObject(fillObject(SportsmanUserRdo, Mocks.UsersMock.User));
  });

  test(UsersTestDescription.Update, async () => {
    const user = await usersController.update(Mocks.UsersMock.User.id, Mocks.UsersMock.UpdateUserDto);
    expect(usersService.update).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.UsersMock.UpdateUserDto);
    expect(user).toMatchObject(fillObject(SportsmanUserRdo, Mocks.UsersMock.User));    
  })
});
