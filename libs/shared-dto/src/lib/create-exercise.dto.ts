import { ExerciseApiProperty } from '@fit-friends/shared-description-property';
import { ExerciseValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateExerciseDto {
  @ApiProperty(ExerciseApiProperty.Title)
  @IsString()
  @Length(
    ExerciseValidation.TitleLength.min,
    ExerciseValidation.TitleLength.max,
  )
  title!: string;

  @ApiProperty(ExerciseApiProperty.Image)
  image!: string;

  @ApiProperty(ExerciseApiProperty.Level)
  @IsEnum(ExerciseValidation.Level)
  level!: string;

  @ApiProperty(ExerciseApiProperty.Type)
  @IsEnum(ExerciseValidation.ExerciseType)  
  type!: string;

  @ApiProperty(ExerciseApiProperty.Duration)
  @IsEnum(ExerciseValidation.DurationTraining)   
  duration!: string;

  @ApiProperty(ExerciseApiProperty.Price)
  @IsNumber()
  @Min(ExerciseValidation.PriceMin)   
  price!: number;

  @ApiProperty(ExerciseApiProperty.CaloriesCount)
  @IsNumber()
  @Min(ExerciseValidation.CaloriesCount.min)   
  @Max(ExerciseValidation.CaloriesCount.max)
  caloriesCount!: number;

  @ApiProperty(ExerciseApiProperty.Description)
  @IsString()
  @Length(
    ExerciseValidation.DescriptionLength.min,
    ExerciseValidation.DescriptionLength.max,
  )  
  description!: string;

  @ApiProperty(ExerciseApiProperty.Gender)
  @IsEnum(ExerciseValidation.Gender)   
  gender!: string;

  @ApiProperty(ExerciseApiProperty.Video)  
  video!: string;

  @ApiProperty(ExerciseApiProperty.IsSpecialOffer)   
  @IsBoolean()
  isSpecialOffer!: boolean;  
}
