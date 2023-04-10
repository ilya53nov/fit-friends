export interface ExerciseDiaryInterface {
  id?: string;
  userId: string;
  exerciseId: string;
  caloriesSpentCount: number;
  timeSpentExercise: number;
  date: Date;
}
