import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { FriendsRepository } from './friends.repository';
import { fillObject } from '@fit-friends/core';
import { RoleEnum } from '@fit-friends/shared-types';
import { CoachUserRdo, SportsmanUserRdo } from '@fit-friends/shared-rdo';
import { UserRepository } from '../users/users.repository';
import { AuthUserDescription } from '../auth/auth.constants';
import { FriendsDescription, FriendsDescriptionAction } from './friends.constants';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class FriendsService {
  constructor(
    private readonly friendsRepository: FriendsRepository,
    private readonly userRepository: UserRepository,
    private readonly notificationsService: NotificationsService,
  ) {}  

  public async create(friendId: string, userId: string) {
    if (userId === friendId) {
      throw new ConflictException(FriendsDescription.YourselfFriendship);
    }

    const existUser = await this.userRepository.findById(friendId);
    
    if (!existUser) {
      throw new NotFoundException(AuthUserDescription.NotFound);
    }

    const existFriend = await this.friendsRepository.findById(friendId, userId);

    if (existFriend) {
      throw new ConflictException(FriendsDescription.ExistFriend);
    }    
    
    await this.friendsRepository.create(friendId, userId);
    await this.friendsRepository.create(userId, friendId);

    await this.notificationsService.create({userId: friendId, text: `${existUser.name} ${FriendsDescriptionAction.AddFriend}`});
  }

  public async findAll(userId: string) {
    const friends = await this.friendsRepository.findAll(userId);
    
    return friends.map(({friend}) => friend.role === RoleEnum.Coach ? fillObject(CoachUserRdo, friend) : fillObject(SportsmanUserRdo, friend));
  }

  public async delete(friendId: string, userId: string) {
    const existFriend = await this.friendsRepository.findById(friendId, userId);

    if (!existFriend) {
      throw new NotFoundException(FriendsDescription.NotFountFriend);
    }

    const friendshipWithMe = await this.friendsRepository.findById(userId, friendId);

    await this.friendsRepository.delete(existFriend.id);
    await this.friendsRepository.delete(friendshipWithMe.id);
  }  
}
