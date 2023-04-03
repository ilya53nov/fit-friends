import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { ExercisesRepository } from './exercises.repository';
import { FilesService } from '../files/files.service';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [FilesModule],
  controllers: [ExercisesController],
  providers: [ExercisesService, ExercisesRepository, FilesService],
  exports: [ExercisesRepository, ExercisesModule]
})
export class ExercisesModule {}
