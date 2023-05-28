export interface BaseUserInterface {
  id?: string;
  name: string;
  email: string;
  avatar: string;
  password?: string;
  passwordHash: string;
  refreshTokenHash: string;
  gender: string;
  dateBirth?: Date;
  role: string;
  locationDefault: string;
  createdAt?: Date;
  exerciseLevel: string;
  exerciseTypes: string[]; 
}

export interface SportsmanInterface extends BaseUserInterface {
  durationTraining?: string;
  caloriesResetCount?: number;
  caloriesSpendPerDayCount?: number;
  isReadyUser?: boolean;  
}

export interface CoachInterface extends BaseUserInterface {
  comment?: string;
  certificate?: string[];
  isReadyCoach?: boolean;
}

export type UserType = SportsmanInterface & CoachInterface;
