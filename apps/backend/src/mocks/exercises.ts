import { ExerciseApiProperty } from '@fit-friends/shared-description-property'
import { CreateExerciseDto, UpdateExerciseDto } from '@fit-friends/shared-dto'
import { ExerciseInterface } from '@fit-friends/shared-types'

const createExerciseDto: CreateExerciseDto = {
  caloriesCount: ExerciseApiProperty.CaloriesCount.example,
  description: ExerciseApiProperty.Description.example,
  duration: ExerciseApiProperty.Duration.example,
  gender: ExerciseApiProperty.Gender.example,
  isSpecialOffer: ExerciseApiProperty.IsSpecialOffer.example,
  level: ExerciseApiProperty.Level.example,
  price: ExerciseApiProperty.Price.example,
  title: ExerciseApiProperty.Title.example,
  type: ExerciseApiProperty.Type.example,
  video: ExerciseApiProperty.Video.example,  
}

const updateExerciseDto: UpdateExerciseDto = {
  caloriesCount: ExerciseApiProperty.CaloriesCount.example,
  description: ExerciseApiProperty.Description.example,
  duration: ExerciseApiProperty.Duration.example,
  gender: ExerciseApiProperty.Gender.example,
  isSpecialOffer: ExerciseApiProperty.IsSpecialOffer.example,
  level: ExerciseApiProperty.Level.example,
  price: ExerciseApiProperty.Price.example,
  title: ExerciseApiProperty.Title.example,
  type: ExerciseApiProperty.Type.example,
  video: ExerciseApiProperty.Video.example,  
  image: ExerciseApiProperty.Image.example,  
}

const exercise: ExerciseInterface = {
  caloriesCount: ExerciseApiProperty.CaloriesCount.example,
  coachId: ExerciseApiProperty.CoachId.example,
  description: ExerciseApiProperty.Description.example,
  duration: ExerciseApiProperty.Duration.example,
  gender: ExerciseApiProperty.Gender.example,
  image: ExerciseApiProperty.Image.example,
  isSpecialOffer: ExerciseApiProperty.IsSpecialOffer.example,
  level: ExerciseApiProperty.Level.example,
  price: ExerciseApiProperty.Price.example,
  title: ExerciseApiProperty.Title.example,
  type: ExerciseApiProperty.Type.example,
  video: ExerciseApiProperty.Video.example,
  createdAt: ExerciseApiProperty.CreatedAt.example,
  id: ExerciseApiProperty.Id.example,
  rating: ExerciseApiProperty.Rating.example,
}

export const ExercisesMock = {
  CreateExerciseDto: createExerciseDto,
  Exercise: exercise,
  UpdateExerciseDto: updateExerciseDto,
}
