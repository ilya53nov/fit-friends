import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodDiaryService } from './food-diary.service';
import { CreateFoodDiaryDto } from './dto/create-food-diary.dto';
import { UpdateFoodDiaryDto } from './dto/update-food-diary.dto';

@Controller('food-diary')
export class FoodDiaryController {
  constructor(private readonly foodDiaryService: FoodDiaryService) {}

  @Post()
  create(@Body() createFoodDiaryDto: CreateFoodDiaryDto) {
    return this.foodDiaryService.create(createFoodDiaryDto);
  }

  @Get()
  findAll() {
    return this.foodDiaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodDiaryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoodDiaryDto: UpdateFoodDiaryDto
  ) {
    return this.foodDiaryService.update(+id, updateFoodDiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodDiaryService.remove(+id);
  }
}
