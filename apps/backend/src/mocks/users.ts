import { UserApiProperty } from "@fit-friends/shared-description-property"
import { CreateUserDto, UpdateUserDto } from "@fit-friends/shared-dto"
import { SportsmanUserRdo } from "@fit-friends/shared-rdo"

const createUserDto: CreateUserDto = {
  avatar: UserApiProperty.Avatar.example,
  caloriesResetCount: UserApiProperty.CaloriesResetCount.example,
  caloriesSpendPerDayCount: UserApiProperty.CaloriesSpendPerDayCount.example,
  durationTraining: UserApiProperty.DurationTraining.example,
  email: UserApiProperty.Email.example,
  exerciseLevel: UserApiProperty.ExerciseLevel.example,
  exerciseTypes: UserApiProperty.ExerciseTypes.example,
  gender: UserApiProperty.Gender.example,
  isReadyUser: UserApiProperty.IsReadyUser.example,
  locationDefault: UserApiProperty.LocationDefault.example,
  name: UserApiProperty.Name.example,
  password: UserApiProperty.Password.example,
  role: UserApiProperty.Role.example,
  dateBirth: UserApiProperty.DateBirth.example,
}

const updateUserDto: UpdateUserDto = {
  avatar: UserApiProperty.Avatar.example,
  caloriesResetCount: UserApiProperty.CaloriesResetCount.example,
  caloriesSpendPerDayCount: UserApiProperty.CaloriesSpendPerDayCount.example,
  durationTraining: UserApiProperty.DurationTraining.example,
  exerciseLevel: UserApiProperty.ExerciseLevel.example,
  exerciseTypes: UserApiProperty.ExerciseTypes.example,
  gender: UserApiProperty.Gender.example,
  isReadyUser: UserApiProperty.IsReadyUser.example,
  locationDefault: UserApiProperty.LocationDefault.example,
  name: UserApiProperty.Name.example,
  dateBirth: UserApiProperty.DateBirth.example,
}

const user: SportsmanUserRdo = {
  avatar: UserApiProperty.Avatar.example,
  caloriesResetCount: UserApiProperty.CaloriesResetCount.example,
  caloriesSpendPerDayCount: UserApiProperty.CaloriesSpendPerDayCount.example,
  durationTraining: UserApiProperty.DurationTraining.example,
  email: UserApiProperty.Email.example,
  exerciseLevel: UserApiProperty.ExerciseLevel.example,
  exerciseTypes: UserApiProperty.ExerciseTypes.example,
  gender: UserApiProperty.Gender.example,
  isReadyUser: UserApiProperty.IsReadyUser.example,
  locationDefault: UserApiProperty.LocationDefault.example,
  name: UserApiProperty.Name.example,
  role: UserApiProperty.Role.example,
  dateBirth: UserApiProperty.DateBirth.example,
  createdAt: UserApiProperty.CreatedAt.example,
  id: UserApiProperty.Id.example,
}

export const UsersMock = {
  CreateUserDto: createUserDto,
  User: user,
  UpdateUserDto: updateUserDto,
}
