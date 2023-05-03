import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { FavoriteGymService } from './favorite-gym.service';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavoriteGymApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.FavoriteGym)
@Controller(ApiRouteEnum.FavoriteGym)
export class FavoriteGymController {
  constructor(private readonly favoriteGymService: FavoriteGymService) {}

  @ApiOperation({summary: FavoriteGymApiOperation.Create})
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post(ParameterKey.Rout)
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) gymId: number,
  ) {
    return await this.favoriteGymService.create(userId, gymId);
  }

  @ApiOperation({summary: FavoriteGymApiOperation.FindAll})
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string) {
    return await this.favoriteGymService.findAll(userId);
  }

  @ApiOperation({summary: FavoriteGymApiOperation.Delete})
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Delete(ParameterKey.Rout)
  public async delete(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) gymId: number,
  ) {
    return await this.favoriteGymService.delete(userId, gymId);
  }
}
