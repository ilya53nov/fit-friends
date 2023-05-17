import { ParameterKey } from '@fit-friends/shared-types'

export const saveLoggedData = (accessToken: string, refreshToken: string, role: string) => {
  localStorage.setItem(ParameterKey.AccessToken, accessToken);
  localStorage.setItem(ParameterKey.RefreshToken, refreshToken);
  localStorage.setItem(ParameterKey.Role, role);
}

export const getAccessToken = () => {
  return localStorage.getItem(ParameterKey.AccessToken);
}

export const getUserRole= () => {
  return localStorage.getItem(ParameterKey.Role);
}

export const getRefreshToken = () => {
  return localStorage.getItem(ParameterKey.RefreshToken);
}
