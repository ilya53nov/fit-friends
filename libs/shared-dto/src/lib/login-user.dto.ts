import { ApiProperty } from '@nestjs/swagger';
import { UserApiProperty } from '@fit-friends/shared-description-property'
import { IsString, Length } from 'class-validator';
import { UserValidation } from '@fit-friends/shared-validation'

export class LoginUserDto {
  @ApiProperty(UserApiProperty.Email)
  @IsString()
  public email!: string;

  @ApiProperty(UserApiProperty.Password)
  @IsString()
  @Length(UserValidation.PasswordLength.min, UserValidation.PasswordLength.max, {message: UserValidation.PasswordLength.message})
  public password!: string;
}