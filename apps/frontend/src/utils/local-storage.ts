import { ParameterKey } from '@fit-friends/shared-types'

export const saveTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(ParameterKey.AccessToken, accessToken);
  localStorage.setItem(ParameterKey.RefreshToken, refreshToken);  
}

export const saveLoggedData = (accessToken: string, refreshToken: string, role: string, id: string) => {
  saveTokens(accessToken, refreshToken);
  localStorage.setItem(ParameterKey.Role, role);
  localStorage.setItem(ParameterKey.Id, id);
}

export const getAccessToken = () => {
  return localStorage.getItem(ParameterKey.AccessToken);
}

export const getUserRole= () => {
  return localStorage.getItem(ParameterKey.Role);
}

export const getUserId= () => {
  return localStorage.getItem(ParameterKey.Id);
}

export const getRefreshToken = () => {
  return localStorage.getItem(ParameterKey.RefreshToken);
}
