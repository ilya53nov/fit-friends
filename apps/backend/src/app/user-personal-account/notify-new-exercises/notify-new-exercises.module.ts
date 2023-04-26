import { Module } from '@nestjs/common';
import { NotifyNewExercisesService } from './notify-new-exercises.service';
import { NotifyNewExercisesController } from './notify-new-exercises.controller';
import { SubscriberRepository } from './subscriber.repository';
import { ExercisesRepository } from '../../exercises/exercises.repository';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailConfig } from '@fit-friends/core';

@Module({
  imports: [
    MailerModule.forRootAsync(getMailConfig()),
  ],
  controllers: [NotifyNewExercisesController],
  providers: [NotifyNewExercisesService, SubscriberRepository, ExercisesRepository],
  exports: [NotifyNewExercisesModule, SubscriberRepository]
})
export class NotifyNewExercisesModule {}
