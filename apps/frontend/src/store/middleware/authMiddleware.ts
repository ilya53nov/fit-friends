import { LoggedUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum, JwtTokenType, ParameterKey } from '@fit-friends/shared-types';
import { Middleware, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { getAccessToken, getRefreshToken, saveLoggedData, saveTokens } from '../../utils/local-storage';
import { ClientRoute } from '../../constants/client-route.enum';
import { authApi } from '../auth/auth-api';
import { store } from '../store';

const UNAUTHORIZED_CODE = 401;

export const authMiddleware: Middleware  = () => (next) => (action) => {
  if (isFulfilled(action) && action.meta.arg.endpointName === ApiRouteEnum.Login ) {
    const loggedUser: LoggedUserRdo = action.payload;

    const {accessToken, id, refreshToken, role} = loggedUser;

    saveLoggedData(accessToken, refreshToken, role, id);
  }

  if (isFulfilled(action) && action.meta.arg.endpointName === ApiRouteEnum.RefreshToken ) {
    const jwtToken: JwtTokenType = action.payload;

    const {accessToken, refreshToken} = jwtToken;
    
    saveTokens(accessToken, refreshToken);
  }

  if (isRejected(action) && action.payload.status === UNAUTHORIZED_CODE) {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
      localStorage.removeItem(ParameterKey.AccessToken);
      store.dispatch(authApi.endpoints.refreshTokens.initiate({}));
    } else {
      window.location.replace(ClientRoute.Login);
    }

  }

  return next(action);
};
