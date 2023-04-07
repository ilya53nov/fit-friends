import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { AccessTokenGuard, GetUser } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey } from '@fit-friends/shared-types';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FriendsApiOperation } from '@fit-friends/shared-description-operation';

@ApiTags(ApiRouteEnum.Friends)
@Controller(ApiRouteEnum.Friends)
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @ApiOperation({summary: FriendsApiOperation.Create})
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Body() createFriendDto: CreateFriendDto,
  ) {
    return await this.friendsService.create(createFriendDto, userId);
  }

  @ApiOperation({summary: FriendsApiOperation.FindAll})
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string,) {
    return this.friendsService.findAll(userId);
  }

  @ApiOperation({summary: FriendsApiOperation.Delete})
  @Delete(ParameterKey.Rout)
  public async remove(@Param(ParameterKey.Id) id: string) {
    return this.friendsService.remove(+id);
  }
}
