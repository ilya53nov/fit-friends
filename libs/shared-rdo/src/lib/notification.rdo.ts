import { NotificationApiProperty } from '@fit-friends/shared-description-property';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NotificationRdo {
  @ApiProperty(NotificationApiProperty.Id)
  @Expose()
  public id!: string;

  @ApiProperty(NotificationApiProperty.UserId)
  @Expose()
  public userId!: string;

  @ApiProperty(NotificationApiProperty.Text)
  @Expose()
  public text!: string;

  @ApiProperty(NotificationApiProperty.CreatedAt)
  @Expose()
  public createdAt!: Date;  
}
