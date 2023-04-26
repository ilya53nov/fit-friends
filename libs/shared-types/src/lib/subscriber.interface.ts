export interface SubscriberInterface {
  id?: string;
  subscribeDate?: Date;
  isActiveSubscribe?: boolean;
  userId: string;
  coachId: string;
  lastNotifyDate?: Date;
}
