import { ParameterKey } from '@fit-friends/shared-types'

export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(ParameterKey.AccessToken, accessToken);
  localStorage.setItem(ParameterKey.RefreshToken, refreshToken);
}

export const getAccessToken = () => {
  return localStorage.getItem(ParameterKey.AccessToken);
}

export const getRefreshToken = () => {
  return localStorage.getItem(ParameterKey.RefreshToken);
}
