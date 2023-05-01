import { Module } from '@nestjs/common';
import { PersonalExercisesService } from './personal-exercises.service';
import { PersonalExercisesController } from './personal-exercises.controller';
import { PersonalExercisesRepository } from './personal-exercises.repository';
import { UsersModule } from '../users/users.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationsRepository } from '../notifications/notifications.repository';

@Module({
  imports: [UsersModule, NotificationsModule],
  controllers: [PersonalExercisesController],
  providers: [
    PersonalExercisesService,    
    PersonalExercisesRepository,
    NotificationsService,
    NotificationsRepository
  ],
})
export class PersonalExercisesModule {}
