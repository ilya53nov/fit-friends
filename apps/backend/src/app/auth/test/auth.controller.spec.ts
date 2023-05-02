import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { Test } from '@nestjs/testing';
import { SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { AuthTestDescription } from './auth-test.constants'

const mockAuthService = {
  register: jest.fn().mockResolvedValue(fillObject(SportsmanUserRdo, Mocks.UsersMock.User)),
  loginUser: jest.fn().mockResolvedValue(Mocks.AuthMock.Tokens),
  refreshTokens: jest.fn().mockResolvedValue(Mocks.AuthMock.Tokens),
};

describe(AuthTestDescription.Controller, () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthService],
      controllers: [AuthController],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    authService = module.get<AuthService>(AuthService);
    authController = module.get<AuthController>(AuthController);

    jest.clearAllMocks();
  });

  test(AuthTestDescription.Login, async () => {
    const result = await authController.login(Mocks.AuthMock.LoginUserDto);
    expect(authService.loginUser).toBeCalledWith(Mocks.AuthMock.LoginUserDto);
    expect(result).toMatchObject(Mocks.AuthMock.Tokens);
  });


  test(AuthTestDescription.RefreshTokens, async () => {
    const result = await authController.refreshTokens({user: {email: Mocks.UsersMock.User.email}}, Mocks.AuthMock.Tokens.refreshToken);
    expect(authService.refreshTokens).toBeCalledWith(Mocks.UsersMock.User.email, Mocks.AuthMock.Tokens.refreshToken);
    expect(result).toEqual(Mocks.AuthMock.Tokens);
  });

  test(AuthTestDescription.Register, async () => {
    const user = await authController.register(Mocks.UsersMock.CreateUserDto);
    expect(authService.register).toBeCalledWith(Mocks.UsersMock.CreateUserDto);
    expect(user).toEqual(fillObject(SportsmanUserRdo, Mocks.UsersMock.User));    
  })
});
