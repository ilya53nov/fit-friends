import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ApiMethod, ApiTag, api } from '../api/api';
import { LoggedUserRdo, UserRdo } from '@fit-friends/shared-rdo';
import { CreateUserDto, LoginUserDto } from '@fit-friends/shared-dto';
import { getRefreshToken } from '../../utils/local-storage';

 export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user: CreateUserDto) => ({
        url: `${ApiRouteEnum.Auth}/${ApiRouteEnum.Register}`,
        method: ApiMethod.Post,
        body: user,        
      }),
      transformResponse: (response: UserRdo) => response,
      invalidatesTags: [ApiTag.Users],
    }),
    login: builder.mutation<LoggedUserRdo, LoginUserDto>({
      query: (loginUserDto: LoginUserDto) => ({
        url: `${ApiRouteEnum.Auth}/${ApiRouteEnum.Login}`,
        method: ApiMethod.Post,
        body: loginUserDto,        
      }),
      transformResponse: (response: LoggedUserRdo) => response,
    }),
    getMe: builder.query({
      query: () => `${ApiRouteEnum.Auth}/${ApiRouteEnum.Me}`,
      transformResponse: (response: UserRdo) => response,
      providesTags: [ApiTag.Users],
    }),
    refreshTokens: builder.query({
      query: () => {
        const refreshToken = getRefreshToken();

        return {
          url: `${ApiRouteEnum.Auth}/${ApiRouteEnum.RefreshToken}`,
          headers: {
            'authorization': `Bearer ${refreshToken}`
          },          
        };
      },
      providesTags: [ApiTag.Auth],
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
} = authApi;
