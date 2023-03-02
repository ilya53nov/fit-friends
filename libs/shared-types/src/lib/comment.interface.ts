import { ExerciseInterface } from "./exercise.interface";
import { UserInterface } from "./user.interface";

export interface CommentInterface {
  id: string;
  author: UserInterface;
  exercise: ExerciseInterface;
  score: number;
  text: string;
  createdAt: Date;
}
