import { LoggedUserRdo } from '@fit-friends/shared-rdo';
import { ApiRouteEnum } from '@fit-friends/shared-types';
import { Middleware, isFulfilled } from '@reduxjs/toolkit';
import { saveLoggedData } from '../../utils/local-storage';

export const authMiddleware: Middleware  = () => (next) => (action) => {
  if (isFulfilled(action) && action.meta.arg.endpointName === ApiRouteEnum.Login ) {
    const loggedUser: LoggedUserRdo = action.payload;

    saveLoggedData(loggedUser.accessToken, loggedUser.refreshToken, loggedUser.role);
  }

  return next(action);
};
