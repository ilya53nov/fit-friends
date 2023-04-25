export interface SubscriberInterface {
  id?: string;
  subscribeDate?: Date;
  unsubscribeDate?: Date;
  isActiveSubscribe?: boolean;
  userId: string;
  coachId: string;
  lastNotifyDate?: string;
}
