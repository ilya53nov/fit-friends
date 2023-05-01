import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReviewsEntity } from './reviews.entity';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ReviewsEntity) {
    const entityData = item.toObject();

    return await this.prisma.review.create({
      data: {...entityData}
    })
  }

  public async findByExerciseId(exerciseId: string) {
    return await this.prisma.review.findMany({
      where: {
        exerciseId,
      }
    })
  }
}
