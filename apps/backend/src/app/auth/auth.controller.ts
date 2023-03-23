import { RefreshTokenGuard } from '@fit-friends/core';
import { CreateCoachUserDto, CreateSportsmanUserDto, LoginUserDto } from '@fit-friends/shared-dto';
import { CoachUserRdo, LoggedUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParametrKey } from '@fit-friends/shared-types';
import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  Request,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthUserDescription } from './auth.constants';
import { AuthService } from './auth.service';

@Controller(ApiRouteEnum.Auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(ApiRouteEnum.RegisterSportsman)
  @ApiResponse({
    type: SportsmanUserRdo,
    status: HttpStatus.CREATED,
    description: AuthUserDescription.Created
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  public async registerSportsman(@Body() userDto: CreateSportsmanUserDto) {
    return await this.authService.registerSpotsman(userDto);    
  }

  @Post(ApiRouteEnum.RegisterCoach)
  @ApiResponse({
    type: CoachUserRdo,
    status: HttpStatus.CREATED,
    description: AuthUserDescription.Created
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  public async registerCoach(@Body() userDto: CreateCoachUserDto) {
    return await this.authService.registerCoach(userDto);    
  }

  @Post(ApiRouteEnum.Login)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: AuthUserDescription.Logged
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: AuthUserDescription.PasswordOrLoginWrong
  })
  public async login(@Body() loginUserDto: LoginUserDto) {        
    return this.authService.loginUser(loginUserDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Get(ApiRouteEnum.RefreshToken)
  public async refreshTokens(@Request() req, @Headers(ParametrKey.Authorization) bearerToken: string) {
    return this.authService.refreshTokens(req.user.email, bearerToken);
  }

  
}
