import { RoleEnum } from '@fit-friends/shared-types'

export const isUser = (userRole: RoleEnum): boolean => {
  return userRole === RoleEnum.Sportsman;
}
