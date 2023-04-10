import { FoodDiaryApiProperty } from '@fit-friends/shared-description-property';
import { FoodDiaryValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNumber } from 'class-validator';
import { Type } from 'class-transformer'

export class CreateFoodDiaryDto {
  @ApiProperty(FoodDiaryApiProperty.CaloriesCount)
  @IsNumber()
  caloriesCount!: number;

  @ApiProperty(FoodDiaryApiProperty.FoodType)
  @IsEnum(FoodDiaryValidation.FoodType)
  foodType!: string;

  @ApiProperty(FoodDiaryApiProperty.Date)
  @IsDate()
  @Type(() => Date)
  date!: Date;
}
