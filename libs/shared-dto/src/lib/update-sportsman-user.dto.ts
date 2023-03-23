import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { UpdateBaseUserDto } from './update-base-user.dto';

export class UpdateSportsmanUserDto extends UpdateBaseUserDto {
  @ApiProperty(UserApiProperty.DurationTraining)
  @IsOptional()
  @IsEnum(UserValidation.DurationTraining)
  durationTraining!: string;

  @ApiProperty(UserApiProperty.CaloriesResetCount)
  @IsOptional()
  @IsNumber()
  @Min(UserValidation.CaloriesResetCount.min)
  @Max(UserValidation.CaloriesResetCount.max)
  caloriesResetCount!: number;

  @ApiProperty(UserApiProperty.CaloriesSpendPerDayCount)
  @IsOptional()
  @IsNumber()
  @Min(UserValidation.CaloriesSpendPerDayCount.min)
  @Max(UserValidation.CaloriesSpendPerDayCount.max)
  caloriesSpendPerDayCount!: number;

  @ApiProperty(UserApiProperty.IsReadyUser)
  @IsOptional()
  @IsBoolean()
  isReadyUser!: boolean;
}
