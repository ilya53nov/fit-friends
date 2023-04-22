import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { FriendsRepository } from './friends.repository';
import { UserRepository } from '../users/users.repository';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService, FriendsRepository, UserRepository],
})
export class FriendsModule {}
