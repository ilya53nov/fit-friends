import { UserApiProperty } from '@fit-friends/shared-description-property'
import { LoginUserDto } from '@fit-friends/shared-dto'
import { JwtTokenType } from '@fit-friends/shared-types'

const tokens: JwtTokenType = {
  accessToken: UserApiProperty.AccessToken.example,
  refreshToken: UserApiProperty.RefreshToken.example,
}

const loginUserDto: LoginUserDto = {
  email: UserApiProperty.Email.example,
  password: UserApiProperty.Password.example,
}

export const AuthMock = {
  Tokens: tokens,
  LoginUserDto: loginUserDto,
}
