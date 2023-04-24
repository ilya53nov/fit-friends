import { Module } from '@nestjs/common';
import { NotifyNewExercisesService } from './notify-new-exercises.service';
import { NotifyNewExercisesController } from './notify-new-exercises.controller';

@Module({
  controllers: [NotifyNewExercisesController],
  providers: [NotifyNewExercisesService],
})
export class NotifyNewExercisesModule {}
