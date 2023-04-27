import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { FriendsRepository } from './friends.repository';
import { UserRepository } from '../users/users.repository';
import { NotificationsModule } from '../notifications/notifications.module';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationsRepository } from '../notifications/notifications.repository';

@Module({
  imports: [NotificationsModule],
  controllers: [FriendsController],
  providers: [FriendsService, FriendsRepository, UserRepository, NotificationsService, NotificationsRepository],
})
export class FriendsModule {}
