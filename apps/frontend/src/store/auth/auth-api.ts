import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ApiMethod, ApiTag, api } from '../api/api';
import { LoggedUserRdo, UserRdo } from '@fit-friends/shared-rdo';
import { CreateUserDto, LoginUserDto } from '@fit-friends/shared-dto';

 export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
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
  })
})

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useGetMeQuery,
} = authApi;
