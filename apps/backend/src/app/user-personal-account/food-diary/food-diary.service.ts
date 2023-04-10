import { CreateFoodDiaryDto, UpdateFoodDiaryDto } from '@fit-friends/shared-dto';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { FoodDiaryRepository } from './food-diary.repository';
import { FoodDiaryEntity } from './food-diary.entity';

@Injectable()
export class FoodDiaryService {
  constructor(
    private readonly foodDiaryRepository: FoodDiaryRepository,
  ) {}  

  public async create(createFoodDiaryDto: CreateFoodDiaryDto, userId: string) {
    const entity = await new FoodDiaryEntity({...createFoodDiaryDto, userId});

    const newFoodDiary = await this.foodDiaryRepository.create(entity);

    return newFoodDiary;
  }

  findAll() {
    return `This action returns all foodDiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodDiary`;
  }

  public async update(foodDiaryid: string, userId: string, updateFoodDiaryDto: UpdateFoodDiaryDto) {
    const existFoodDiary = await this.foodDiaryRepository.findById(foodDiaryid);

    if (!existFoodDiary) {
      throw new NotFoundException('Дневник тренировок не найден');
    }

    if (existFoodDiary.userId !== userId) {
      throw new ForbiddenException('Вы не являетесь владельцем данного дневника тренировок');
    }

    const foodDiaryEntity = await new FoodDiaryEntity({...existFoodDiary, ...updateFoodDiaryDto});

    const updatedFoodDiary = await this.foodDiaryRepository.update(foodDiaryid, foodDiaryEntity);

    return updatedFoodDiary;
  }

  remove(id: number) {
    return `This action removes a #${id} foodDiary`;
  }
}
