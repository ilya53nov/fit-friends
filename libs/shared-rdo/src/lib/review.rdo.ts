import { ReviewApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReviewRdo {
  @ApiProperty(ReviewApiProperty.Id)
  @Expose() 
  id!: string;

  @ApiProperty(ReviewApiProperty.AuthorId)
  @Expose() 
  authorId!: string;

  @ApiProperty(ReviewApiProperty.ExerciseId)
  @Expose()  
  exerciseId!: string;

  @ApiProperty(ReviewApiProperty.AuthorId)
  @Expose() 
  score!: number;

  @ApiProperty(ReviewApiProperty.Text)
  @Expose() 
  text!: string; 

  @ApiProperty(ReviewApiProperty.CreatedAt)
  @Expose() 
  createdAt!: Date;   
}
