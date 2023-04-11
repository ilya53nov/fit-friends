import { CreateFoodDiaryDto, UpdateFoodDiaryDto } from '@fit-friends/shared-dto';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { FoodDiaryRepository } from './food-diary.repository';
import { FoodDiaryEntity } from './food-diary.entity';
import { fillObject } from '@fit-friends/core';
import { FoodDiaryRdo } from '@fit-friends/shared-rdo';
import { FoodDiaryDescription } from './food-diary.constants';

@Injectable()
export class FoodDiaryService {
  constructor(
    private readonly foodDiaryRepository: FoodDiaryRepository,
  ) {}  

  public async create(createFoodDiaryDto: CreateFoodDiaryDto, userId: string) {
    const entity = await new FoodDiaryEntity({...createFoodDiaryDto, userId});

    const newFoodDiary = await this.foodDiaryRepository.create(entity);

    return fillObject(FoodDiaryRdo, newFoodDiary) ;
  }

  public async findAll(userId: string) {
    const finded = await this.foodDiaryRepository.findAll(userId);

    return finded.map((item) => fillObject(FoodDiaryRdo, item));
  }

  public async update(foodDiaryid: string, userId: string, updateFoodDiaryDto: UpdateFoodDiaryDto) {
    const existFoodDiary = await this.foodDiaryRepository.findById(foodDiaryid);

    if (!existFoodDiary) {
      throw new NotFoundException(FoodDiaryDescription.NotFound);
    }

    if (existFoodDiary.userId !== userId) {
      throw new ForbiddenException(FoodDiaryDescription.NotOwner);
    }

    const foodDiaryEntity = await new FoodDiaryEntity({...existFoodDiary, ...updateFoodDiaryDto});

    const updatedFoodDiary = await this.foodDiaryRepository.update(foodDiaryid, foodDiaryEntity);

    return fillObject(FoodDiaryRdo, updatedFoodDiary);
  }

}
