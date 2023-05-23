import { ApiRouteEnum } from '@fit-friends/shared-types';
import { ApiMethod, ApiTag, api } from '../api/api';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import { ExercisesQuery } from '@fit-friends/core';
import { CreateExerciseDto, UpdateExerciseDto } from '@fit-friends/shared-dto';

const exercisesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExercises: builder.query<ExerciseRdo[], ExercisesQuery | undefined>({
      query: (query: ExercisesQuery) => {
        return {
          url: ApiRouteEnum.Exercises,
          params: query,
        };
      }, 
      providesTags: [ApiTag.Exercises],
    }),
    getMyExercises: builder.query<ExerciseRdo[], ExercisesQuery>({
      query: (query: ExercisesQuery) => {
        return {
          url: `${ApiRouteEnum.Exercises}/${ApiRouteEnum.My}`,
          params: query,
        };
      },
      providesTags: [ApiTag.Exercises],
    }),
    getExercise: builder.query({
      query: (id: string) => `${ApiRouteEnum.Exercises}/${id}`,
      transformResponse: (response: ExerciseRdo) => response,
      providesTags: [ApiTag.Exercises],
    }),
    updateExercise: builder.mutation({
      query: (exercise: {id: string, updateExerciseDto: UpdateExerciseDto}) => ({
        url: `${ApiRouteEnum.Exercises}/${exercise.id}`,
        method: ApiMethod.Patch,
        body: exercise.updateExerciseDto,
      }),
      invalidatesTags: [ApiTag.Exercises],
    }),
    createExercise: builder.mutation({
      query: (createExerciseDto: CreateExerciseDto) => ({
        url: ApiRouteEnum.Exercises,
        method: ApiMethod.Post,
        body: createExerciseDto,
      }),
      invalidatesTags: [ApiTag.Exercises],
    }),
  })
})

export const {
  useCreateExerciseMutation,
  useGetExerciseQuery,
  useGetExercisesQuery,
  useGetMyExercisesQuery,
  useUpdateExerciseMutation,
} = exercisesApi;
