import { ExerciseApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ExerciseRdo {
  @ApiProperty(ExerciseApiProperty.Id)
  @Expose()
  id!: string;

  @ApiProperty(ExerciseApiProperty.Title)
  @Expose()
  title!: string;

  @ApiProperty(ExerciseApiProperty.Image)
  @Expose()
  image!: string;

  @ApiProperty(ExerciseApiProperty.Level)
  @Expose()
  level!: string;

  @ApiProperty(ExerciseApiProperty.Type)
  @Expose() 
  type!: string;

  @ApiProperty(ExerciseApiProperty.Duration)
  @Expose()  
  duration!: string;

  @ApiProperty(ExerciseApiProperty.Price)
  @Expose() 
  price!: number;

  @ApiProperty(ExerciseApiProperty.CaloriesCount)
  @Expose()
  caloriesCount!: number;

  @ApiProperty(ExerciseApiProperty.Description)
  @Expose() 
  description!: string;

  @ApiProperty(ExerciseApiProperty.Gender)
  @Expose()
  gender!: string;

  @ApiProperty(ExerciseApiProperty.Video)  
  @Expose()
  video!: string;

  @ApiProperty(ExerciseApiProperty.CoachId) 
  @Expose()
  coachId!: string;

  @ApiProperty(ExerciseApiProperty.Rating) 
  @Expose()
  rating!: number;

  @ApiProperty(ExerciseApiProperty.IsSpecialOffer)   
  @Expose()
  isSpecialOffer!: boolean;   

  @ApiProperty(ExerciseApiProperty.CreatedAt)   
  @Expose()
  createdAt!: Date;
}
