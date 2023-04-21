import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { FriendsRepository } from './friends.repository';
import { UserRepository } from '../users/users.repository';
import { FriendshipRequestRepository } from './repositories/friendship-request.repository';
import { FriendshipRequestService } from './services/friendship-request.service';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService, FriendshipRequestService, FriendsRepository, UserRepository, FriendshipRequestRepository],
})
export class FriendsModule {}
