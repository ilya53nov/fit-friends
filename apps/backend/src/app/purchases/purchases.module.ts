import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { PurchasesRepository } from './purchases.repository';
import { ExercisesModule } from '../exercises/exercises.module';
import { ExercisesService } from '../exercises/exercises.service';
import { FilesService } from '../files/files.service';
import { NotifyNewExercisesModule } from '../user-personal-account/notify-new-exercises/notify-new-exercises.module';
import { NotifyNewExercisesService } from '../user-personal-account/notify-new-exercises/notify-new-exercises.service';

@Module({
  imports: [ExercisesModule, NotifyNewExercisesModule],
  controllers: [PurchasesController],
  providers: [PurchasesService, PurchasesRepository, ExercisesService, FilesService, NotifyNewExercisesService],
  exports: [PurchasesRepository]
})
export class PurchasesModule {}
