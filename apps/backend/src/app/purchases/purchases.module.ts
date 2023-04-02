import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { PurchasesRepository } from './purchases.repository';
import { ExercisesModule } from '../exercises/exercises.module';
import { ExercisesService } from '../exercises/exercises.service';

@Module({
  imports: [ExercisesModule],
  controllers: [PurchasesController],
  providers: [PurchasesService, PurchasesRepository, ExercisesService],
  exports: [PurchasesRepository, PurchasesModule]
})
export class PurchasesModule {}
