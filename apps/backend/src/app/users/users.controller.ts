import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { UpdateCoachUserDto, UpdateSportsmanUserDto } from '@fit-friends/shared-dto';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParametrKey, RoleEnum } from '@fit-friends/shared-types';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller(ApiRouteEnum.Users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
    status: HttpStatus.OK,
  })
  @Get()
  public async findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
  })
  @Get(ParametrKey.Rout)
  public async findOne(@Param(ParametrKey.Id) id: string) {
    return this.usersService.findOne(id);
  }

  @ApiResponse({
    type: SportsmanUserRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.UpdateSportsman)
  public async updateSportsman(
    @GetUser(ParametrKey.Id) userId: string,
    @Body() updateUserDto: UpdateSportsmanUserDto
  ) {
    return this.usersService.updateSpotsman(userId, updateUserDto);
  }

  @ApiResponse({
    type: CoachUserRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.UpdateCoach)
  public async updateCoach(
    @GetUser(ParametrKey.Id) userId: string,
    @Body() updateUserDto: UpdateCoachUserDto
  ) {
    return this.usersService.updateCoach(userId, updateUserDto);
  }

}
