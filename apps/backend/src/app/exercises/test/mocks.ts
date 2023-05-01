import { CreateExerciseDto } from '@fit-friends/shared-dto'

const createExerciseDto: CreateExerciseDto = {
  caloriesCount: 1000,
  description: 'description',
  duration: 'duration',
  gender: 'gender',
  isSpecialOffer: true,
  level: 'level',
  price: 1000,
  title: 'title',
  type: 'type',
  video: 'video',
}

export const ExercisesMock = {
  CreateExerciseDto: createExerciseDto,
}
