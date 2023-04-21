import { ExerciseDiaryApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ExerciseDiaryRdo {
  @ApiProperty(ExerciseDiaryApiProperty.Id)
  @Expose()
  id!: string;
  
  @ApiProperty(ExerciseDiaryApiProperty.ExerciseId)
  @Expose()
  exerciseId!: string;

  @ApiProperty(ExerciseDiaryApiProperty.CaloriesSpentCount)
  @Expose() 
  caloriesSpentCount!: number;

  @ApiProperty(ExerciseDiaryApiProperty.TimeSpentExercise)
  @Expose()
  timeSpentExercise!: number;

  @ApiProperty(ExerciseDiaryApiProperty.Date)
  @Expose()
  date!: Date;
}
