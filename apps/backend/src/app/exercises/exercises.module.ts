import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { ExercisesRepository } from './exercises.repository';
import { FilesService } from '../files/files.service';
import { FilesModule } from '../files/files.module';
import { NotifyNewExercisesService } from '../user-personal-account/notify-new-exercises/notify-new-exercises.service';
import { NotifyNewExercisesModule } from '../user-personal-account/notify-new-exercises/notify-new-exercises.module';
import { SubscriberRepository } from '../user-personal-account/notify-new-exercises/subscriber.repository';

@Module({
  imports: [FilesModule, NotifyNewExercisesModule],
  controllers: [ExercisesController],
  providers: [ExercisesService, ExercisesRepository, FilesService, NotifyNewExercisesService],
  exports: [ExercisesRepository, ExercisesModule]
})
export class ExercisesModule {}
