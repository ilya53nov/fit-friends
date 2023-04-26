import { Module } from '@nestjs/common';
import { NotifyNewExercisesService } from './notify-new-exercises.service';
import { NotifyNewExercisesController } from './notify-new-exercises.controller';
import { SubscriberRepository } from './subscriber.repository';

@Module({
  controllers: [NotifyNewExercisesController],
  providers: [NotifyNewExercisesService, SubscriberRepository],
  exports: [NotifyNewExercisesModule, SubscriberRepository]
})
export class NotifyNewExercisesModule {}
