import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserApiProperty } from '@fit-friends/shared-description-property';

export class LoggedUserRdo {
  @ApiProperty(UserApiProperty.Id)
  @Expose()
  public id!: string;

  @ApiProperty(UserApiProperty.Email)
  @Expose()
  public email!: string;

  @ApiProperty(UserApiProperty.AccessToken)
  @Expose()
  public accessToken!: string;
}