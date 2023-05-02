import { PersonalExerciseApiProperty } from "@fit-friends/shared-description-property";
import { CreatePersonalExerciseDto, UpdatePersonalExerciseDto } from "@fit-friends/shared-dto";
import { PersonalExerciseInterface } from "@fit-friends/shared-types";

const createPersonalExerciseDto: CreatePersonalExerciseDto = {
  userId: PersonalExerciseApiProperty.UserId.example,
}

const updatePersonalExerciseDto: UpdatePersonalExerciseDto = {
  status: PersonalExerciseApiProperty.Status.example,
}

const personalExercise: PersonalExerciseInterface = {
  status: PersonalExerciseApiProperty.Status.example,
  initiatorId: PersonalExerciseApiProperty.InitiatorId.example,
  userId: PersonalExerciseApiProperty.UserId.example,
  createdAt: PersonalExerciseApiProperty.CreatedAt.example,
  id: PersonalExerciseApiProperty.Id.example,
  updatedAt: PersonalExerciseApiProperty.UpdatedAt.example,
}

export const PersonalExerciseMock = {
  CreatePersonalExerciseDto: createPersonalExerciseDto,
  UpdatePersonalExerciseDto: updatePersonalExerciseDto,
  PersonalExercise: personalExercise,
}
