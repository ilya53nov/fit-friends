import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { FoodDiaryService } from './food-diary.service';
import { CreateFoodDiaryDto, UpdateFoodDiaryDto } from '@fit-friends/shared-dto';
import { AccessTokenGuard, GetUser, Roles, RolesGuard } from '@fit-friends/core';
import { ApiRouteEnum, ParameterKey, RoleEnum } from '@fit-friends/shared-types';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FoodDiaryApiOperation } from '@fit-friends/shared-description-operation';
import { FoodDiaryRdo } from '@fit-friends/shared-rdo';

@ApiTags(ApiRouteEnum.FoodDiary)
@Controller(ApiRouteEnum.FoodDiary)
export class FoodDiaryController {
  constructor(private readonly foodDiaryService: FoodDiaryService) {}

  @ApiOperation({summary: FoodDiaryApiOperation.Create})
  @ApiResponse({
    type: FoodDiaryRdo,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Post()
  public async create(
    @GetUser(ParameterKey.Id) userId: string,
    @Body() createFoodDiaryDto: CreateFoodDiaryDto
  ) {
    return this.foodDiaryService.create(createFoodDiaryDto, userId);
  }

  @ApiOperation({summary: FoodDiaryApiOperation.FindAll})
  @ApiResponse({
    type: FoodDiaryRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Get()
  public async findAll(@GetUser(ParameterKey.Id) userId: string,) {
    return this.foodDiaryService.findAll(userId);
  }

  @ApiOperation({summary: FoodDiaryApiOperation.Update})
  @ApiResponse({
    type: FoodDiaryRdo,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
  })  
  @Roles(RoleEnum.Sportsman)
  @UseGuards(RolesGuard)
  @UseGuards(AccessTokenGuard)
  @Patch(ParameterKey.Rout)
  public async update(
    @GetUser(ParameterKey.Id) userId: string,
    @Param(ParameterKey.Id) foodDiaryid: string,
    @Body() updateFoodDiaryDto: UpdateFoodDiaryDto
  ) {
    return this.foodDiaryService.update(foodDiaryid, userId, updateFoodDiaryDto);
  }

}
