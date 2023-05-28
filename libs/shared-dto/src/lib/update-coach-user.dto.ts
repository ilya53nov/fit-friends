import { UserApiProperty } from '@fit-friends/shared-description-property';
import { UserValidation } from '@fit-friends/shared-validation';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsBoolean, IsEnum, IsOptional, Length, ValidateIf } from 'class-validator';
import { UpdateBaseUserDto } from './update-base-user.dto';
import { RoleEnum } from '@fit-friends/shared-types';

export class UpdateCoachUserDto extends UpdateBaseUserDto {
  @ApiProperty(UserApiProperty.Comment)
  @ValidateIf((user) => user.role === RoleEnum.Coach)
  @IsOptional()
  @Length(UserValidation.CommentLength.min, UserValidation.CommentLength.max)
  comment?: string;

  @ApiProperty(UserApiProperty.Certificate)
  @ValidateIf((user) => user.role === RoleEnum.Coach)
  @IsOptional()
  certificate?: string[];

  @ApiProperty(UserApiProperty.IsReadyCoach)
  @ValidateIf((user) => user.role === RoleEnum.Coach)
  @IsOptional()
  @IsBoolean()
  isReadyCoach?: boolean;
}
