import { FoodDiaryApiProperty } from '@fit-friends/shared-description-property';
import { FoodDiaryValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';

export class UpdateFoodDiaryDto {
  @ApiProperty(FoodDiaryApiProperty.CaloriesCount)
  @IsOptional()
  @IsNumber()
  caloriesCount!: number;

  @ApiProperty(FoodDiaryApiProperty.FoodType)
  @IsOptional()
  @IsEnum(FoodDiaryValidation.FoodType)
  foodType!: string;

  @ApiProperty(FoodDiaryApiProperty.Date)
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date!: Date;
}
