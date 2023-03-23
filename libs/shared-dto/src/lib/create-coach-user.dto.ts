import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, Length } from 'class-validator';
import { CreateBaseUserDto } from './create-base-user.dto';

export class CreateCoachUserDto extends CreateBaseUserDto {
  @ApiProperty(UserApiProperty.Comment)
  @Length(UserValidation.CommentLength.min, UserValidation.CommentLength.max)
  comment?: string;

  @ApiProperty(UserApiProperty.Certificate)
  certificate?: string;

  @ApiProperty(UserApiProperty.IsReadyCoach)
  @IsBoolean()
  isReadyCoach?: boolean;
}
