import { ApiRouteEnum } from '@fit-friends/shared-types';
import { UserRdo } from '@fit-friends/shared-rdo';
import { UpdateUserDto } from '@fit-friends/shared-dto';
import { ApiMethod, ApiTag, api } from '../api/api';

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ApiRouteEnum.Users,
      providesTags: [ApiTag.Users],
    }),
    getUser: builder.query({
      query: (id: string) => `${ApiRouteEnum.Users}/${id}`,
      transformResponse: (response: UserRdo) => response,
      providesTags: [ApiTag.Users],
    }),
    updateUser: builder.mutation({
      query: (user: {id: string, updateUserDto: UpdateUserDto}) => ({
        url: `${ApiRouteEnum.Users}/${user.id}`,
        method: ApiMethod.Patch,
        body: user.updateUserDto,
      }),
      invalidatesTags: [ApiTag.Users],
    }),
  })
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
} = usersApi;