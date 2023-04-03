import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendsRepository } from './friends.repository';
import { fillObject } from '@fit-friends/core';
import { RoleEnum } from '@fit-friends/shared-types';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { UserRepository } from '../users/users.repository';
import { AuthUserDescription } from '../auth/auth.constants';

@Injectable()
export class FriendsService {
  constructor(
    private readonly friendsRepository: FriendsRepository,
    private readonly userRepository: UserRepository,
  ) {}  

  public async create(createFriendDto: CreateFriendDto, userId: string) {
    const friendId = createFriendDto.friendId;

    const existUser = await this.userRepository.findById(friendId);
    
    if (!existUser) {
      throw new UnauthorizedException(AuthUserDescription.NotFound);
    }
    
    return await this.friendsRepository.create(friendId, userId);
  }

  public async findAll(userId: string) {
    const friends = await this.friendsRepository.findAll(userId);
    
    return friends.map(({friend}) => friend.role === RoleEnum.Coach ? fillObject(CoachUserRdo, friend) : fillObject(SportsmanUserRdo, friend));
  }

  remove(id: number) {
    return `This action removes a #${id} friend`;
  }
}
