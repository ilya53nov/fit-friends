import { ExerciseValidation } from '@fit-friends/shared-validation';
import { Transform } from 'class-transformer';
import { ArrayMaxSize, IsArray, IsEnum, IsIn, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ExercisesQueryParametr, SortDirection } from '../exercises.constants';

export class ExercisesQuery {
  @Transform(({ value } ) => +value || ExercisesQueryParametr.DefaultExerciseCountLimit)
  @IsNumber()
  @IsOptional()
  public limit = ExercisesQueryParametr.DefaultExerciseCountLimit;  

  @Transform(({ value }) => value.split(ExercisesQueryParametr.Separator.array).map((durationTitle) => durationTitle))
  @IsEnum(ExerciseValidation.DurationTraining, {each: true})  
  @IsArray({})
  @IsOptional()
  public durations?: string[];

  @Transform(({ value }) => value.split(ExercisesQueryParametr.Separator.range).map((price) => +price))
  @IsArray({})
  @IsNumber({}, {each: true})
  @ArrayMaxSize(ExercisesQueryParametr.MaxCountInRange)
  @IsOptional()
  public priceRange?: number[];

  @Transform(({ value }) => value.split(ExercisesQueryParametr.Separator.range).map((calorie) => +calorie))
  @IsArray({})
  @IsNumber({}, {each: true})
  @ArrayMaxSize(ExercisesQueryParametr.MaxCountInRange)
  @IsOptional()
  public calorieRange?: number[];

  @IsIn([SortDirection.Asc, SortDirection.Desc])
  @IsOptional()
  public sortDirection: SortDirection.Desc | SortDirection.Asc = ExercisesQueryParametr.DefaultSortDirection;

  @Transform(({ value }) => +value)
  @Min(ExerciseValidation.Rating.min)
  @Max(ExerciseValidation.Rating.max)
  @IsOptional()
  public rating?: number;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number;
}
