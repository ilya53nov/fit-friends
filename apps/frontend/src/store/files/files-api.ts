import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ApiMethod, api } from '../api/api';

const filesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addAvatar: builder.mutation({
      query: (file: FormData) => ({
        url: `${ApiRouteEnum.Files}/${ApiRouteEnum.Avatar}`,
        method: ApiMethod.Post,
        body: file, 
        responseHandler: 'text',
      }),
    }),
    addCertificate: builder.mutation({
      query: (file: FormData) => ({
        url: `${ApiRouteEnum.Files}/${ApiRouteEnum.Certificate}`,
        method: ApiMethod.Post,
        body: file, 
        responseHandler: 'text',
      }),
    }),
  })
})

export const {
  useAddAvatarMutation,
  useAddCertificateMutation,
} = filesApi;