import { ExerciseInterface } from '@fit-friends/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ExercisesQueryParametr } from './exercises.constants';
import { ExerciseEntity } from './exercises.entity';
import { ExercisesQuery } from './query/exercises.query';

@Injectable()
export class ExercisesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findById(id: string): Promise<ExerciseInterface> {
    return await this.prisma.exercise.findFirst({
      where: {
        id,
      }
    });
  }

  public async findAll(coachId: string, {limit, page, sortDirection, durations, rating, priceRange, calorieRange}: ExercisesQuery): Promise<ExerciseInterface[]> {
    return await this.prisma.exercise.findMany({
      where: {
        coachId,
        duration: {
          in: durations,
        },
        rating: {
          equals: rating,
        },
        price: {
          gte: priceRange[ExercisesQueryParametr.IndexInRange.gte],
          lte: priceRange[ExercisesQueryParametr.IndexInRange.lte],
        },
        caloriesCount: {
          gte: calorieRange[ExercisesQueryParametr.IndexInRange.gte],
          lte: calorieRange[ExercisesQueryParametr.IndexInRange.lte],
        }
      },
      take: limit,
      orderBy: [
        {
          createdAt: sortDirection,
        }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }  

  public async create(item: ExerciseEntity): Promise<ExerciseInterface> {
    const entityData = item.toObject();

    return await this.prisma.exercise.create({
      data: {...entityData},
    })
  }

  public async update(id: string, item: ExerciseEntity): Promise<ExerciseInterface> {
    const entityData = item.toObject();

    return await this.prisma.exercise.update({
      where: {
        id,
      },
      data: {
        ...entityData,
      }
    })
  }

  public async getSoldExercises(coachId: string) {
    return await this.prisma.exercise.findMany({
      where: {
        coachId,
        AND: {
          buyers: {
            some: {
              countExercise: {
                gte: 1
              }
            }
          }
        }
      },
      include: {
        buyers: {          
          select: {
            countExercise: true,
            sum: true,
          }
        }
      },

    })
  }

}
