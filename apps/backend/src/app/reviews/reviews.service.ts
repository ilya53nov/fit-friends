import { Injectable, NotFoundException } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repository';
import { ReviewsEntity } from './reviews.entity';
import { CreateReviewDto } from '@fit-friends/shared-dto';
import { fillObject } from '@fit-friends/core';
import { ReviewRdo } from '@fit-friends/shared-rdo';
import { ExercisesRepository } from '../exercises/exercises.repository';
import { ExercisesDescription } from '../exercises/exercises.constants';
import { ExerciseEntity } from '../exercises/exercises.entity';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository,
    private readonly exercisesRepository: ExercisesRepository,
  ) {}

  public async create(userId: string, createReviewDto: CreateReviewDto) {
    const exercise = await this.exercisesRepository.findById(createReviewDto.exerciseId);

    if (!exercise) {
      throw new NotFoundException(ExercisesDescription.NotFound);
    }

    const entity = new ReviewsEntity({...createReviewDto, authorId: userId});

    const newReview = await this.reviewsRepository.create(entity);

    const averageRating = await this.getAverageRating(createReviewDto.exerciseId);

    const exerciseEntity = new ExerciseEntity(exercise);

    exerciseEntity.rating = averageRating;

    await this.exercisesRepository.update(exerciseEntity.id, exerciseEntity);

    return fillObject(ReviewRdo, newReview);
  }

  public async findByExerciseId(exerciseId: string) {
    const reviews = await this.reviewsRepository.findByExerciseId(exerciseId);

    return reviews.map((item) => fillObject(ReviewRdo, item));
  }

  private async getAverageRating(exerciseId: string) {
    const reviews = await this.reviewsRepository.findByExerciseId(exerciseId);

    const scores = [].concat(...reviews.map((item) => item.score));

    const count = scores.length;

    const sum = scores.reduce((current, next) => current + next);

    const averageRating = Math.round(sum / count);

    return averageRating;
  }

}
