import { ExerciseDiaryApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateExerciseDiaryDto {
  @ApiProperty(ExerciseDiaryApiProperty.CaloriesSpentCount)
  @IsOptional()
  @IsNumber()  
  caloriesSpentCount!: number;

  @ApiProperty(ExerciseDiaryApiProperty.TimeSpentExercise)
  @IsOptional()
  @IsNumber()
  timeSpentExercise!: number;

  @ApiProperty(ExerciseDiaryApiProperty.Date)
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date!: Date;
}
