import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, Max, Min } from 'class-validator';
import { CreateBaseUserDto } from './create-base-user.dto';

export class CreateSportsmanUserDto extends CreateBaseUserDto {
  @ApiProperty(UserApiProperty.DurationTraining)
  @IsEnum(UserValidation.DurationTraining)
  durationTraining!: string;

  @ApiProperty(UserApiProperty.CaloriesResetCount)
  @IsNumber()
  @Min(UserValidation.CaloriesResetCount.min)
  @Max(UserValidation.CaloriesResetCount.max)
  caloriesResetCount!: number;

  @ApiProperty(UserApiProperty.CaloriesSpendPerDayCount)
  @IsNumber()
  @Min(UserValidation.CaloriesSpendPerDayCount.min)
  @Max(UserValidation.CaloriesSpendPerDayCount.max)
  caloriesSpendPerDayCount!: number;

  @ApiProperty(UserApiProperty.IsReadyUser)
  @IsBoolean()
  isReadyUser!: boolean;
}
