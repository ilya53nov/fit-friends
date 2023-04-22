import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FriendsApiOperation } from '@fit-friends/shared-description-operation';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';

@ApiTags(ApiRouteEnum.Friends)
@Controller(ApiRouteEnum.Friends)
export class FriendsController {
  constructor(
    private readonly friendsService: FriendsService,
  ) {}

  @ApiOperation({summary: FriendsApiOperation.Create})
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
    @Param(ParameterKey.Id) friendId: string,
  ) {
    return await this.friendsService.create(friendId, userId);
  }

  @ApiOperation({summary: FriendsApiOperation.FindAll})
  @ApiResponse({
    type: SportsmanUserRdo || CoachUserRdo,
    status: HttpStatus.OK,
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string,) {
    return this.friendsService.findAll(userId);
  }

  @ApiOperation({summary: FriendsApiOperation.Delete})
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN
  })
  @UseGuards(AccessTokenGuard)
  @Delete(ParameterKey.Rout)
  public async delete(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) friendId: string
  ) {
    return this.friendsService.delete(friendId, userId)
  }
}
