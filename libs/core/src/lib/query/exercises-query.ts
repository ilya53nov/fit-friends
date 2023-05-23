import { ExerciseApiProperty } from '@fit-friends/shared-description-property';
import { ExerciseDurationEnum, QueryParameter } from '@fit-friends/shared-types';
import { ExerciseValidation } from '@fit-friends/shared-validation';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsEnum, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { BaseQuery } from './base-query';

export class ExercisesQuery extends BaseQuery {
  @ApiPropertyOptional({default: ExerciseApiProperty.Duration.example, required: false, enum: ExerciseDurationEnum})
  @Transform(({ value }) => value.split(QueryParameter.Separator.array).map((durationTitle: string) => durationTitle))
  @IsEnum(ExerciseValidation.DurationTraining, {each: true})  
  @IsArray({})
  @IsOptional()
  public durations?: string[];

  @ApiPropertyOptional({default: '0-1000', required: false, example: '0-1000'})
  @Transform(({ value }) => value.split(QueryParameter.Separator.range).map((price: number) => price))
  @IsArray({})
  @IsNumber({}, {each: true})
  @ArrayMaxSize(QueryParameter.MaxCountInRange)
  @IsOptional()
  public priceRange?: number[];

  @ApiPropertyOptional({default: '0-1000', required: false, example: '0-1000'})
  @Transform(({ value }) => value.split(QueryParameter.Separator.range).map((calorie: number) => calorie))
  @IsArray({})
  @IsNumber({}, {each: true})
  @ArrayMaxSize(QueryParameter.MaxCountInRange)
  @IsOptional()
  public calorieRange?: number[];

  @ApiPropertyOptional({default: 1, required: false})
  @Transform(({ value }) => +value)
  @Min(ExerciseValidation.Rating.min)
  @Max(ExerciseValidation.Rating.max)
  @IsOptional()
  public rating?: number;
}
