import { GymTypeEnum, LocationEnum } from "@fit-friends/shared-types";

export const GymValidation = {
  TitleLength: {
    min: 1,
    max: 15,
  },
  Location: LocationEnum,
  Type: GymTypeEnum,
  Image: {
    fileType: /image\/(jpeg|png)$/,
    maxSize: 1024 * 1024 * 5,   
    maxCount: 5, 
  },
  DescriptionLength: {
    max: 140,
  },
  Price: {
    min: 100,
    max: 5000,
  }
}
