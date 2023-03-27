import { ExerciseApiProperty } from '@fit-friends/shared-description-property';
import { ExerciseValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class UpdateExerciseDto {
  @ApiProperty(ExerciseApiProperty.Title)
  @IsOptional()
  @IsString()
  @Length(
    ExerciseValidation.TitleLength.min,
    ExerciseValidation.TitleLength.max,
  )
  title!: string;

  @ApiProperty(ExerciseApiProperty.Image)
  @IsOptional()
  image!: string;

  @ApiProperty(ExerciseApiProperty.Level)
  @IsOptional()
  @IsEnum(ExerciseValidation.Level)
  level!: string;

  @ApiProperty(ExerciseApiProperty.Type)
  @IsOptional()
  @IsEnum(ExerciseValidation.ExerciseType)  
  type!: string;

  @ApiProperty(ExerciseApiProperty.Duration)
  @IsOptional()
  @IsEnum(ExerciseValidation.DurationTraining)   
  duration!: string;

  @ApiProperty(ExerciseApiProperty.Price)
  @IsOptional()
  @IsNumber()
  @Min(ExerciseValidation.PriceMin)   
  price!: number;

  @ApiProperty(ExerciseApiProperty.CaloriesCount)
  @IsOptional()
  @IsNumber()
  @Min(ExerciseValidation.CaloriesCount.min)   
  @Max(ExerciseValidation.CaloriesCount.max)
  caloriesCount!: number;

  @ApiProperty(ExerciseApiProperty.Description)
  @IsOptional()
  @IsString()
  @Length(
    ExerciseValidation.DescriptionLength.min,
    ExerciseValidation.DescriptionLength.max,
  )  
  description!: string;

  @ApiProperty(ExerciseApiProperty.Gender)
  @IsOptional()
  @IsEnum(ExerciseValidation.Gender)   
  gender!: string;

  @ApiProperty(ExerciseApiProperty.Video) 
  @IsOptional() 
  video!: string;

  @ApiProperty(ExerciseApiProperty.IsSpecialOffer)   
  @IsOptional()
  @IsBoolean()
  isSpecialOffer!: boolean;  
}
