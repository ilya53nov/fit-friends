import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FoodDiaryEntity } from './food-diary.entity';
import { FoodDiaryInterface } from '@fit-friends/shared-types';

@Injectable()
export class FoodDiaryRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: FoodDiaryEntity) {
    const entityData = item.toObject();

    return await this.prisma.foodDiary.create({
      data: {...entityData},
    })
  }

  public async update(id: string, item: FoodDiaryEntity) {
    const entityData = item.toObject();

    return await this.prisma.foodDiary.update({
      where: {
        id,
      },
      data: {...entityData},
    })
  }

  public async findById(id: string): Promise<FoodDiaryInterface>{
    return await this.prisma.foodDiary.findFirst({
      where: {
        id,
      }
    });
  }


}