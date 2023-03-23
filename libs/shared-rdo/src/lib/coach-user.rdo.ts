import { Expose } from 'class-transformer';
import { BaseUserRdo } from './base-user.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { UserApiProperty } from '@fit-friends/shared-description-property';

export class CoachUserRdo extends BaseUserRdo {
  @ApiProperty(UserApiProperty.Comment)
  @Expose()
  comment?: string;

  @ApiProperty(UserApiProperty.Certificate)
  @Expose()
  certificate?: string;

  @ApiProperty(UserApiProperty.IsReadyCoach)
  @Expose()
  isReadyCoach?: boolean;
}
