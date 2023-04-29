import { ExerciseInterface, QueryParameter } from '@fit-friends/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ExerciseEntity } from './exercises.entity';
import { ExercisesQuery } from './query/exercises.query';
import { BaseQuery } from '@fit-friends/core';

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

  public async findAll({limit, page, sortDirection, durations, rating, priceRange, calorieRange}: ExercisesQuery): Promise<ExerciseInterface[]> {
    return await this.prisma.exercise.findMany({
      where: {
        duration: {
          in: durations,
        },
        rating,
        price: {
          gte: priceRange ? priceRange[QueryParameter.IndexInRange.gte] : undefined,
          lte: priceRange ? priceRange[QueryParameter.IndexInRange.lte] : undefined,
        },
        caloriesCount: {
          gte: calorieRange ? calorieRange[QueryParameter.IndexInRange.gte] : undefined,
          lte: calorieRange ? calorieRange[QueryParameter.IndexInRange.lte] : undefined,
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

  public async findAllByCoachId(coachId: string, {limit, page, sortDirection, durations, rating, priceRange, calorieRange}: ExercisesQuery): Promise<ExerciseInterface[]> {
    return await this.prisma.exercise.findMany({
      where: {
        coachId,
        duration: {
          in: durations,
        },
        rating,
        price: {
          gte: priceRange ? priceRange[QueryParameter.IndexInRange.gte] : undefined,
          lte: priceRange ? priceRange[QueryParameter.IndexInRange.lte] : undefined,
        },
        caloriesCount: {
          gte: calorieRange ? calorieRange[QueryParameter.IndexInRange.gte] : undefined,
          lte: calorieRange ? calorieRange[QueryParameter.IndexInRange.lte] : undefined,
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

  public async findMany(exercisesId: string[]) {
    return await this.prisma.exercise.findMany({
      where: {
        id: {
          in: exercisesId,
        }
      }
    })
  }

  public async getSoldExercises(coachId: string, {limit, page, sortDirection}: BaseQuery) {
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
      take: limit,
      orderBy: [
        {
          createdAt: sortDirection,
        }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,

    })
  }

}
