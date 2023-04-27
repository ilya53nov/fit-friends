import { NotificationApiProperty } from '@fit-friends/shared-description-property';
import { NotificationValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty(NotificationApiProperty.UserId)
  @IsUUID()
  public userId!: string;

  @ApiProperty(NotificationApiProperty.Text)
  @IsString()
  @Length(
    NotificationValidation.TextLength.min,
    NotificationValidation.TextLength.max,
  )
  public text!: string;
}
