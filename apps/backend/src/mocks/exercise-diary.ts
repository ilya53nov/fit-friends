import { ExerciseDiaryApiProperty } from "@fit-friends/shared-description-property";
import { CreateExerciseDiaryDto, UpdateExerciseDiaryDto } from "@fit-friends/shared-dto";
import { ExerciseDiaryInterface } from "@fit-friends/shared-types";

const createExerciseDiaryDto: CreateExerciseDiaryDto = {
  caloriesSpentCount: ExerciseDiaryApiProperty.CaloriesSpentCount.example,
  date: ExerciseDiaryApiProperty.Date.example,
  exerciseId: ExerciseDiaryApiProperty.ExerciseId.example,
  timeSpentExercise: ExerciseDiaryApiProperty.TimeSpentExercise.example,
}

const updateExerciseDiaryDto: UpdateExerciseDiaryDto = {
  caloriesSpentCount: ExerciseDiaryApiProperty.CaloriesSpentCount.example,
  date: ExerciseDiaryApiProperty.Date.example,
  timeSpentExercise: ExerciseDiaryApiProperty.TimeSpentExercise.example,
}

const exerciseDiary: ExerciseDiaryInterface = {
  caloriesSpentCount: ExerciseDiaryApiProperty.CaloriesSpentCount.example,
  date: ExerciseDiaryApiProperty.Date.example,
  exerciseId: ExerciseDiaryApiProperty.ExerciseId.example,
  timeSpentExercise: ExerciseDiaryApiProperty.TimeSpentExercise.example,
  userId: ExerciseDiaryApiProperty.UserId.example,
  id: ExerciseDiaryApiProperty.Id.example,
}

export const ExerciseDiaryMock = {
  CreateExerciseDiaryDto: createExerciseDiaryDto,
  UpdateExerciseDiaryDto: updateExerciseDiaryDto,
  ExerciseDiary: exerciseDiary,
}
