import { FoodDiaryApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class FoodDiaryRdo {
  @ApiProperty(FoodDiaryApiProperty.Id)
  @Expose()
  id!: string;

  @ApiProperty(FoodDiaryApiProperty.CaloriesCount)
  @Expose()
  caloriesCount!: number;

  @ApiProperty(FoodDiaryApiProperty.FoodType)
  @Expose()
  foodType!: string;

  @ApiProperty(FoodDiaryApiProperty.Date)
  @Expose()
  date!: Date;  
}
