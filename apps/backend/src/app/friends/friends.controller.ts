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
import { ApiRouteEnum, ParametrKey } from '@fit-friends/shared-types';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(ApiRouteEnum.Friends)
@Controller(ApiRouteEnum.Friends)
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParametrKey.Id) userId: string,
    @Body() createFriendDto: CreateFriendDto,
  ) {
    return await this.friendsService.create(createFriendDto, userId);
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  findAll(@GetUser(ParametrKey.Id) userId: string,) {
    return this.friendsService.findAll(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.friendsService.remove(+id);
  }
}
