import { ExerciseInterface } from "./exercise.interface";
import { UserType } from "./user.interface";

export interface CommentInterface {
  id: string;
  author: UserType;
  exercise: ExerciseInterface;
  score: number;
  text: string;
  createdAt: Date;
}
