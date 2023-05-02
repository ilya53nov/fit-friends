import { ReviewApiProperty } from '@fit-friends/shared-description-property';
import { CreateReviewDto } from '@fit-friends/shared-dto';
import { ReviewInterface } from '@fit-friends/shared-types';

const createReviewDto: CreateReviewDto = {
  exerciseId: ReviewApiProperty.ExerciseId.example,
  score: ReviewApiProperty.Score.example,
  text: ReviewApiProperty.Text.example,
}

const reviewInterface: ReviewInterface = {
  authorId: ReviewApiProperty.AuthorId.example,
  exerciseId: ReviewApiProperty.ExerciseId.example,
  score: ReviewApiProperty.Score.example,
  text: ReviewApiProperty.Text.example,
  createdAt: ReviewApiProperty.CreatedAt.example,
  id: ReviewApiProperty.Id.example,
}

export const ReviewsMock = {
  CreateReviewDto: createReviewDto,
  ReviewInterface: reviewInterface,
}
