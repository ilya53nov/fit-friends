import { CreateUserDto, LoginUserDto } from '@fit-friends/shared-dto'
import { JwtTokenType } from '@fit-friends/shared-types'

const tokens: JwtTokenType = {
  accessToken: 'hsdjfdslksdfklsddfg',
  refreshToken: 'ihjdfigopifdpooofdougu',
}

const loginUserDto: LoginUserDto = {
  email: 'user@notfound4.local',
  password: '123456',
}

const createUserDto: CreateUserDto = {
  avatar: '',
  caloriesResetCount: 1000,
  caloriesSpendPerDayCount: 1000,
  durationTraining: '',
  email: 'user@notfound4.local',
  exerciseLevel: '',
  exerciseTypes: [''],
  gender: '',
  isReadyUser: true,
  locationDefault: '',
  name: '',
  password: '123456',
  role: 'user',
  dateBirth: new Date(),
}

const user = {
  avatar: '',
  caloriesResetCount: 1000,
  caloriesSpendPerDayCount: 1000,
  durationTraining: '',
  email: 'user@notfound4.local',
  exerciseLevel: '',
  exerciseTypes: [''],
  gender: '',
  isReadyUser: true,
  locationDefault: '',
  name: '',
  role: 'user',
  dateBirth: new Date(),
  createdAt: new Date(),
  id: 'fgfgffg'
}

export const AuthMock = {
  Tokens: tokens,
  LoginUserDto: loginUserDto,
  CreateUserDto: createUserDto,
  User: user,
}
