import { RefreshTokenGuard } from '@fit-friends/core';
import { CreateUserDto, LoginUserDto } from '@fit-friends/shared-dto';
import { CoachUserRdo, LoggedUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParameterKey } from '@fit-friends/shared-types';
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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUserDescription } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Auth)
@Controller(ApiRouteEnum.Auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({description: AuthApiOperation.Register})
  @Post(ApiRouteEnum.Register)
  @ApiResponse({
    type: SportsmanUserRdo,
    status: HttpStatus.CREATED,
    description: AuthUserDescription.Created
  })
  @ApiResponse({
    type: CoachUserRdo,
    status: HttpStatus.CREATED,
    description: AuthUserDescription.Created
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  public async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);    
  }

  @ApiOperation({description: AuthApiOperation.Login})
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

  @ApiOperation({description: AuthApiOperation.RefreshTokens})
  @UseGuards(RefreshTokenGuard)
  @Get(ApiRouteEnum.RefreshToken)
  public async refreshTokens(@Request() req, @Headers(ParameterKey.Authorization) bearerToken: string) {
    return this.authService.refreshTokens(req.user.email, bearerToken);
  }

  
}
