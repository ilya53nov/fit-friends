import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, Length, ValidateIf } from 'class-validator';
import { CreateBaseUserDto } from './create-base-user.dto';
import { RoleEnum } from '@fit-friends/shared-types';

export class CreateCoachUserDto extends CreateBaseUserDto {
  @ApiProperty(UserApiProperty.Comment)
  @ValidateIf((user) => user.role === RoleEnum.Coach)
  @Length(UserValidation.CommentLength.min, UserValidation.CommentLength.max)
  comment?: string;

  @ApiProperty(UserApiProperty.Certificate)
  @ValidateIf((user) => user.role === RoleEnum.Coach)
  certificate?: string;

  @ApiProperty(UserApiProperty.IsReadyCoach)
  @ValidateIf((user) => user.role === RoleEnum.Coach)
  @IsBoolean()
  isReadyCoach?: boolean;
}
