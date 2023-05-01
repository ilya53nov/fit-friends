import { ReviewApiProperty } from '@fit-friends/shared-description-property';
import { ReviewValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID, Length, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty(ReviewApiProperty.ExerciseId)
  @IsUUID()  
  exerciseId!: string;

  @ApiProperty(ReviewApiProperty.AuthorId)
  @IsNumber()
  @Min(ReviewValidation.Score.Min) 
  @Max(ReviewValidation.Score.Max)
  score!: number;

  @ApiProperty(ReviewApiProperty.Text)
  @IsString()
  @Length(
    ReviewValidation.TextLength.Min,
    ReviewValidation.TextLength.Max,
    {message: ReviewValidation.TextLength.Message}
  )
  text!: string; 
}
