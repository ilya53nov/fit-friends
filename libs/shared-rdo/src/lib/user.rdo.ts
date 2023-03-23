import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  id!: string;

  @Expose()
  name!: string;

  @Expose()
  email!: string;

  @Expose()
  avatar!: string;

  @Expose()
  gender!: string;

  @Expose()
  dateBirth?: Date;

  @Expose()
  role!: string;

  @Expose()
  locationDefault!: string;

  @Expose()
  createdAt?: Date;

  @Expose()
  exerciseLevel!: string;

  @Expose()
  exerciseTypes!: string[]; 

  @Expose()
  durationTraining?: string;

  @Expose()
  caloriesResetCount?: number;

  @Expose()
  caloriesSpendPerDayCount?: number;

  @Expose()
  isReadyUser?: boolean;

  @Expose()
  comment?: string;

  @Expose()
  certificate?: string;

  @Expose()
  isReadyCoach?: boolean;
}
