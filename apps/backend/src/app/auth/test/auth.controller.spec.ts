import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { Test } from '@nestjs/testing';
import { SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { fillObject } from '@fit-friends/core';
import { AuthMock } from './mocks';
import { AuthTestDescription } from './auth-test.constants'

const mockAuthService = {
  register: jest.fn().mockResolvedValue(fillObject(SportsmanUserRdo, AuthMock.User)),
  loginUser: jest.fn().mockResolvedValue(AuthMock.Tokens),
  refreshTokens: jest.fn().mockResolvedValue(AuthMock.Tokens),
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
    const result = await authController.login(AuthMock.LoginUserDto);
    expect(authService.loginUser).toBeCalledWith(AuthMock.LoginUserDto);
    expect(result).toMatchObject(AuthMock.Tokens);
  });


  test(AuthTestDescription.RefreshTokens, async () => {
    const result = await authController.refreshTokens({user: {email: AuthMock.User.email}}, AuthMock.Tokens.refreshToken);
    expect(authService.refreshTokens).toBeCalledWith(AuthMock.User.email, AuthMock.Tokens.refreshToken);
    expect(result).toEqual(AuthMock.Tokens);
  });

  test(AuthTestDescription.Register, async () => {
    const user = await authController.register(AuthMock.CreateUserDto);
    expect(authService.register).toBeCalledWith(AuthMock.CreateUserDto);
    expect(user).toEqual(fillObject(SportsmanUserRdo, AuthMock.User));    
  })
});
