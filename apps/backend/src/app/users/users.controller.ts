import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { UpdateCoachUserDto, UpdateSportsmanUserDto, UpdateUserDto } from '@fit-friends/shared-dto';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, ParametrKey, RoleEnum } from '@fit-friends/shared-types';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller(ApiRouteEnum.Users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
  })
  @Get()
  public async findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
  })
  @Get(ParametrKey.Rout)
  public async findOne(@Param(ParametrKey.Id) id: string) {
    return this.usersService.findOne(id);
  }

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.UpdateSportsman)
  public async updateSportsman(@GetUser(ParametrKey.Id) userId: string, @Body() updateUserDto: UpdateSportsmanUserDto) {
    return this.usersService.updateSpotsman(userId, updateUserDto);
  }

  @Roles(RoleEnum.Coach)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ApiRouteEnum.UpdateCoach)
  public async updateCoach(@GetUser(ParametrKey.Id) userId: string, @Body() updateUserDto: UpdateCoachUserDto) {
    return this.usersService.updateCoach(userId, updateUserDto);
  }

}
