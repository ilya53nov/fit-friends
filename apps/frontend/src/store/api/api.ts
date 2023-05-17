import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ParameterKey } from '@fit-friends/shared-types'
import { END_POINT_BACKEND } from '../../constants/end-point-backend';
import { getAccessToken } from '../../utils/local-storage';

export enum ApiTag {
  Api = 'api',
  Auth = 'auth',
  Users = 'Users',
  Files = 'files',
}

export enum ApiMethod {
  Post = 'POST',
  Get = 'GET',
  Delete = 'DELETE',
  Patch = "PATCH",
  Put = 'PUT',
}

export const api = createApi({
  reducerPath: ApiTag.Api,
  baseQuery: fetchBaseQuery({
    baseUrl: END_POINT_BACKEND,
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) {
        headers.set(ParameterKey.Authorization, `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [
    ApiTag.Auth,
    ApiTag.Users,
    ApiTag.Files,
  ],
  endpoints: () => ({}),
});
