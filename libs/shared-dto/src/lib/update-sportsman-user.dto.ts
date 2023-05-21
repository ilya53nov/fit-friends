import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsBoolean, IsEnum, IsNumber, IsOptional, Max, Min, ValidateIf } from 'class-validator';
import { UpdateBaseUserDto } from './update-base-user.dto';
import { RoleEnum } from '@fit-friends/shared-types';

export class UpdateSportsmanUserDto extends UpdateBaseUserDto {
  @ApiProperty(UserApiProperty.DurationTraining)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsOptional()
  @IsEnum(UserValidation.DurationTraining)
  durationTraining?: string;

  @ApiProperty(UserApiProperty.CaloriesResetCount)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsOptional()
  @IsNumber()
  @Min(UserValidation.CaloriesResetCount.min)
  @Max(UserValidation.CaloriesResetCount.max)
  caloriesResetCount?: number;

  @ApiProperty(UserApiProperty.CaloriesSpendPerDayCount)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsOptional()
  @IsNumber()
  @Min(UserValidation.CaloriesSpendPerDayCount.min)
  @Max(UserValidation.CaloriesSpendPerDayCount.max)
  caloriesSpendPerDayCount?: number;

  @ApiProperty(UserApiProperty.IsReadyUser)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsOptional()
  @IsBoolean()
  isReadyUser?: boolean;
}
