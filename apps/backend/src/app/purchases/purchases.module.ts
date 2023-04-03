import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { PurchasesRepository } from './purchases.repository';
import { ExercisesModule } from '../exercises/exercises.module';
import { ExercisesService } from '../exercises/exercises.service';
import { FilesService } from '../files/files.service';

@Module({
  imports: [ExercisesModule],
  controllers: [PurchasesController],
  providers: [PurchasesService, PurchasesRepository, ExercisesService, FilesService],
  exports: [PurchasesRepository]
})
export class PurchasesModule {}
