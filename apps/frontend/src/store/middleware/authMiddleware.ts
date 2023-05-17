import { LoggedUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum } from '@fit-friends/shared-types';
import { Middleware, isFulfilled } from '@reduxjs/toolkit';
import { setTokens } from '../../utils/local-storage';

export const authMiddleware: Middleware  = () => (next) => (action) => {
  if (isFulfilled(action) && action.meta.arg.endpointName === ApiRouteEnum.Login ) {
    const loggedUser: LoggedUserRdo = action.payload;

    setTokens(loggedUser.accessToken, loggedUser.refreshToken);
  }

  return next(action);
};
