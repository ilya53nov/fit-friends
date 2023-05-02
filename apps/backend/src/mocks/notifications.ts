import { NotificationApiProperty } from "@fit-friends/shared-description-property";
import { NotificationRdo } from "@fit-friends/shared-rdo";
import { NotificationInterface } from "@fit-friends/shared-types";

const notification: NotificationInterface = {
  text: NotificationApiProperty.Text.example,
  userId: NotificationApiProperty.UserId.example,
  createdAt: NotificationApiProperty.CreatedAt.example,
  id: NotificationApiProperty.Id.example,
}

const notificationRdo: NotificationRdo = {
  text: NotificationApiProperty.Text.example,
  userId: NotificationApiProperty.UserId.example,
  createdAt: NotificationApiProperty.CreatedAt.example,
  id: NotificationApiProperty.Id.example,
}

export const NotificationsMock = {
  Notification: notification,
  NotificationRdo: notificationRdo,
}
