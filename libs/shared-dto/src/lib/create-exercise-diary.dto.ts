import { ExerciseDiaryApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsUUID } from 'class-validator';

export class CreateExerciseDiaryDto {
  @ApiProperty(ExerciseDiaryApiProperty.ExerciseId)
  @IsUUID()
  exerciseId!: string;

  @ApiProperty(ExerciseDiaryApiProperty.CaloriesSpentCount)
  @IsNumber()  
  caloriesSpentCount!: number;

  @ApiProperty(ExerciseDiaryApiProperty.TimeSpentExercise)
  @IsNumber()
  timeSpentExercise!: number;

  @ApiProperty(ExerciseDiaryApiProperty.Date)
  @IsDate()
  @Type(() => Date)
  date!: Date;
}
