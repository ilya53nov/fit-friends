export interface ReviewInterface {
  id?: string;
  authorId: string;
  exerciseId: string;
  score: number;
  text: string;
  createdAt?: Date;
}
