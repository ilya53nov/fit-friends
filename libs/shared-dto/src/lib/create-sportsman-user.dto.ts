import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, Max, Min, ValidateIf } from 'class-validator';
import { CreateBaseUserDto } from './create-base-user.dto';
import { RoleEnum } from '@fit-friends/shared-types';

export class CreateSportsmanUserDto extends CreateBaseUserDto {
  @ApiProperty(UserApiProperty.DurationTraining)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsEnum(UserValidation.DurationTraining)
  durationTraining!: string;

  @ApiProperty(UserApiProperty.CaloriesResetCount)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsNumber()
  @Min(UserValidation.CaloriesResetCount.min)
  @Max(UserValidation.CaloriesResetCount.max)
  caloriesResetCount!: number;

  @ApiProperty(UserApiProperty.CaloriesSpendPerDayCount)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsNumber()
  @Min(UserValidation.CaloriesSpendPerDayCount.min)
  @Max(UserValidation.CaloriesSpendPerDayCount.max)
  caloriesSpendPerDayCount!: number;

  @ApiProperty(UserApiProperty.IsReadyUser)
  @ValidateIf((user) => user.role === RoleEnum.Sportsman)
  @IsBoolean()
  isReadyUser!: boolean;
}
