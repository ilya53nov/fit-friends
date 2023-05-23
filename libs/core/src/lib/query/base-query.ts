import { QueryParameter, SortDirection } from '@fit-friends/shared-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsNumber, IsOptional, Max } from 'class-validator';

export class BaseQuery {
  @ApiPropertyOptional({required: false, default: QueryParameter.DefaultExerciseCountLimit})
  @Transform(({ value } ) => +value || QueryParameter.DefaultExerciseCountLimit)
  @IsNumber()
  @Max(QueryParameter.DefaultExerciseCountLimit)
  @IsOptional()
  public limit: number = QueryParameter.DefaultExerciseCountLimit;  

  @ApiPropertyOptional({enum: SortDirection, required: false, default: QueryParameter.DefaultSortDirection})
  @IsIn([SortDirection.Asc, SortDirection.Desc])
  @IsOptional()
  public sortDirection: SortDirection.Desc | SortDirection.Asc = QueryParameter.DefaultSortDirection;

  @ApiPropertyOptional({required: false, default: QueryParameter.DefaultPageNumber})
  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number | undefined;
}