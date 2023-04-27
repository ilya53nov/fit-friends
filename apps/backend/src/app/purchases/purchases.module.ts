import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { PurchasesRepository } from './purchases.repository';
import { ExercisesModule } from '../exercises/exercises.module';
import { ExercisesService } from '../exercises/exercises.service';
import { FilesService } from '../files/files.service';
import { NotifyNewExercisesModule } from '../user-personal-account/notify-new-exercises/notify-new-exercises.module';
import { NotifyNewExercisesService } from '../user-personal-account/notify-new-exercises/notify-new-exercises.service';
import { UsersModule } from '../users/users.module';
import { UserRepository } from '../users/users.repository';

@Module({
  imports: [
    ExercisesModule,
    NotifyNewExercisesModule,
    UsersModule
  ],
  controllers: [PurchasesController],
  providers: [
    PurchasesService,
    PurchasesRepository,
    ExercisesService,
    FilesService,
    NotifyNewExercisesService,
    UserRepository
  ],
  exports: [PurchasesRepository]
})
export class PurchasesModule {}
