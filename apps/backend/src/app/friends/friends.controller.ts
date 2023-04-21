import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { AccessTokenGuard, GetUser } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey } from '@fit-friends/shared-types';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FriendsApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Friends)
@Controller(ApiRouteEnum.Friends)
export class FriendsController {
  constructor(
    private readonly friendsService: FriendsService,
  ) {}

  @ApiOperation({summary: FriendsApiOperation.Create})
  @UseGuards(AccessTokenGuard)
  @Post(ParameterKey.Rout)
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) friendId: string,
  ) {
    return await this.friendsService.create(friendId, userId);
  }

  @ApiOperation({summary: FriendsApiOperation.FindAll})
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string,) {
    return this.friendsService.findAll(userId);
  }

  @ApiOperation({summary: FriendsApiOperation.Delete})
  @UseGuards(AccessTokenGuard)
  @Delete(ParameterKey.Rout)
  public async delete(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) friendId: string
  ) {
    return this.friendsService.delete(friendId, userId)
  }
}
