import { Injectable } from '@nestjs/common';
import { CreateFoodDiaryDto } from './dto/create-food-diary.dto';
import { UpdateFoodDiaryDto } from './dto/update-food-diary.dto';

@Injectable()
export class FoodDiaryService {
  create(createFoodDiaryDto: CreateFoodDiaryDto) {
    return 'This action adds a new foodDiary';
  }

  findAll() {
    return `This action returns all foodDiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodDiary`;
  }

  update(id: number, updateFoodDiaryDto: UpdateFoodDiaryDto) {
    return `This action updates a #${id} foodDiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodDiary`;
  }
}
