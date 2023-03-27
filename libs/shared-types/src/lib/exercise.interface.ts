export interface ExerciseInterface {
  id?: string;
  title: string;
  image: string;
  level: string;
  type: string;
  duration: string;
  price: number;
  caloriesCount: number;
  description: string;
  gender: string;
  video: string;
  rating?: number;
  coachId: string;
  isSpecialOffer: boolean;
  createdAt?: Date;
}
