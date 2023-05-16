import { fillObject, JwtConfig } from '@fit-friends/core';
import { JwtPayloadType, JwtTokenType, RoleEnum, UserType } from '@fit-friends/shared-types';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../users/users.repository';
import { CreateUserDto, LoginUserDto } from '@fit-friends/shared-dto';
import { UserEntity } from '../users/users.entity';
import { AUTHORIZATION_BEARER, AuthUserDescription } from './auth.constants';
import { CoachUserRdo, LoggedUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';


@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly jwtConfig: JwtConfig,
  ) {}

  public async register(userDto: CreateUserDto) {
    const user = { ...userDto, passwordHash: '', refreshTokenHash: ''};

    const existUser = await this.userRepository.findByEmail(userDto.email);

    if (existUser) {
      throw new UnauthorizedException(AuthUserDescription.Exists);
    }

    const userEntity = await new UserEntity(user)
      .setPassword(userDto.password);

    const newUser = await this.userRepository.create(userEntity);

    const payload = this.getPayloadJwtService(newUser);

    const tokens = await this.getTokens(payload);

    this.updateRefreshToken(newUser, tokens.refreshToken);

    return userDto.role === RoleEnum.Coach ? fillObject(CoachUserRdo, newUser) : fillObject(SportsmanUserRdo, newUser);
  }

  private async verifyUser(userDto: LoginUserDto) {
    const { email, password } = userDto;

    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new UnauthorizedException(AuthUserDescription.NotFound);
    }

    const userEntity = new UserEntity(existUser);

    if (! await userEntity.comparePassword(password)) {
      throw new UnauthorizedException(AuthUserDescription.PasswordWrong);
    }

    return userEntity.toObject();
  }

  public async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.verifyUser(loginUserDto);    

    const payload = this.getPayloadJwtService(user);

    const tokens = await this.getTokens(payload);

    this.updateRefreshToken(user, tokens.refreshToken);

    return fillObject(LoggedUserRdo, {...user, ...tokens});
  }

  private getPayloadJwtService(user: UserType): JwtPayloadType {
    return {
      sub: user.id,
      email: user.email,
      role: user.role as RoleEnum,
      name: user.name,
    };    
  }

  private async getTokens(payload: JwtPayloadType): Promise<JwtTokenType> {
    return {
      accessToken: await this.jwtService.signAsync(payload, await this.jwtConfig.getJwtAccessConfig()),
      refreshToken: await this.jwtService.signAsync(payload, await this.jwtConfig.getJwtRefreshConfig()),
    }
  }

  private async updateRefreshToken(user: UserType, refreshToken: string) {
    const userEntity = await new UserEntity(user)
      .setRefreshToken(refreshToken)    

    this.userRepository.update(user.id, userEntity);
  }

  public async refreshTokens(email: string, bearerToken: string) {  
    if (!bearerToken || !email) {
      throw new UnauthorizedException(AuthUserDescription.AccessDenied);
    }
    const refreshToken = bearerToken.replace(AUTHORIZATION_BEARER, '').trim();

    const existUser = await this.userRepository.findByEmail(email);

    const userEntity = await new UserEntity(existUser);

    if (! await userEntity.compareRefreshToken(refreshToken)) {
      throw new UnauthorizedException(AuthUserDescription.AccessDenied);
    }

    const payload = this.getPayloadJwtService(existUser);

    const tokens = await this.getTokens(payload);

    this.updateRefreshToken(existUser, tokens.refreshToken);

    return tokens;
  }
  
}
