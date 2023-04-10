import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FoodDiaryService } from './food-diary.service';
import { CreateFoodDiaryDto, UpdateFoodDiaryDto } from '@fit-friends/shared-dto';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ParameterKey, RoleEnum } from '@fit-friends/shared-types';

@Controller('food-diary')
export class FoodDiaryController {
  constructor(private readonly foodDiaryService: FoodDiaryService) {}

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Body() createFoodDiaryDto: CreateFoodDiaryDto) {
    return this.foodDiaryService.create(createFoodDiaryDto, userId);
  }

  @Get()
  findAll() {
    return this.foodDiaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodDiaryService.findOne(+id);
  }

  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(
    @GetUser(ParameterKey.Id) userId: string,
    @Param('id') foodDiaryid: string,
    @Body() updateFoodDiaryDto: UpdateFoodDiaryDto
  ) {
    return this.foodDiaryService.update(foodDiaryid, userId, updateFoodDiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodDiaryService.remove(+id);
  }
}
