import { ReviewsController } from '../reviews.controller';
import { ReviewsService } from '../reviews.service';
import { Test } from '@nestjs/testing';
import { fillObject } from '@fit-friends/core';
import { Mocks } from '../../../mocks/mocks';
import { ReviewsTestDescription } from './reviews-test.constants'
import { ReviewRdo } from '@fit-friends/shared-rdo';

const mockAuthService = {
  findByExerciseId: jest.fn().mockResolvedValue(fillObject(ReviewRdo, Mocks.ReviewsMock.ReviewInterface)),
  create: jest.fn().mockResolvedValue(fillObject(ReviewRdo, Mocks.ReviewsMock.ReviewInterface)),
};

describe(ReviewsTestDescription.Controller, () => {
  let reviewsController: ReviewsController;
  let reviewsService: ReviewsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ReviewsService],
      controllers: [ReviewsController],
    })
      .overrideProvider(ReviewsService)
      .useValue(mockAuthService)
      .compile();

    reviewsService = module.get<ReviewsService>(ReviewsService);
    reviewsController = module.get<ReviewsController>(ReviewsController);

    jest.clearAllMocks();
  });

  test(ReviewsTestDescription.FindByExerciseId, async () => {
    const result = await reviewsController.findByExerciseId(Mocks.ExercisesMock.Exercise.id);
    expect(reviewsService.findByExerciseId).toBeCalledWith(Mocks.ExercisesMock.Exercise.id);
    expect(result).toMatchObject(fillObject(ReviewRdo, Mocks.ReviewsMock.ReviewInterface));
  });

  test(ReviewsTestDescription.Create, async () => {
    const result = await reviewsController.create(Mocks.UsersMock.User.id, Mocks.ReviewsMock.CreateReviewDto);
    expect(reviewsService.create).toBeCalledWith(Mocks.UsersMock.User.id, Mocks.ReviewsMock.CreateReviewDto);
    expect(result).toMatchObject(fillObject(ReviewRdo, Mocks.ReviewsMock.ReviewInterface));
  });

});
