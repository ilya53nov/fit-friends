import { Module } from '@nestjs/common';
import { PersonalExercisesService } from './personal-exercises.service';
import { PersonalExercisesController } from './personal-exercises.controller';

@Module({
  controllers: [PersonalExercisesController],
  providers: [PersonalExercisesService],
})
export class PersonalExercisesModule {}
