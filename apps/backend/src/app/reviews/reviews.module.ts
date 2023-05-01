import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ReviewsRepository } from './reviews.repository';
import { ExercisesModule } from '../exercises/exercises.module';
import { ExercisesRepository } from '../exercises/exercises.repository';

@Module({
  imports: [ExercisesModule],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewsRepository, ExercisesRepository],
})
export class ReviewsModule {}
