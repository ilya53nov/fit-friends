import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, Length } from 'class-validator';
import { UpdateBaseUserDto } from './update-base-user.dto';

export class UpdateCoachUserDto extends UpdateBaseUserDto {
  @ApiProperty(UserApiProperty.Comment)
  @IsOptional()
  @Length(UserValidation.CommentLength.min, UserValidation.CommentLength.max)
  comment?: string;

  @ApiProperty(UserApiProperty.Certificate)
  @IsOptional()
  certificate?: string;

  @ApiProperty(UserApiProperty.IsReadyCoach)
  @IsOptional()
  @IsBoolean()
  isReadyCoach?: boolean;
}
