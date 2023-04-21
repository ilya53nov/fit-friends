import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ExerciseDiaryEntity } from './exercise-diary.entity';
import { ExerciseDiaryInterface } from '@fit-friends/shared-types';

@Injectable()
export class ExerciseDiaryRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ExerciseDiaryEntity) {
    const entityData = item.toObject();

    return await this.prisma.exerciseDiary.create({
      data: {...entityData},
    })
  }

  public async update(id: string, item: ExerciseDiaryEntity) {
    const entityData = item.toObject();

    return await this.prisma.exerciseDiary.update({
      where: {
        id,
      },
      data: {...entityData},
    })
  }

  public async findById(id: string): Promise<ExerciseDiaryInterface>{
    return await this.prisma.exerciseDiary.findFirst({
      where: {
        id,
      }
    });
  }

  public async findAll(userId: string): Promise<ExerciseDiaryInterface[]>{
    return await this.prisma.exerciseDiary.findMany({
      where: {
        userId,
      }
    });
  }
}
