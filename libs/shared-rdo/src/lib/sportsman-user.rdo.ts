import { Expose } from 'class-transformer';
import { BaseUserRdo } from './base-user.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { UserApiProperty } from '@fit-friends/shared-description-property';

export class SportsmanUserRdo extends BaseUserRdo {
  @ApiProperty(UserApiProperty.DurationTraining)
  @Expose()
  durationTraining?: string;

  @ApiProperty(UserApiProperty.CaloriesResetCount)
  @Expose()
  caloriesResetCount?: number;

  @ApiProperty(UserApiProperty.CaloriesSpendPerDayCount)
  @Expose()
  caloriesSpendPerDayCount?: number;

  @ApiProperty(UserApiProperty.IsReadyUser)
  @Expose()
  isReadyUser?: boolean;
}
