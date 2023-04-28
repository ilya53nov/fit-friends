import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalExerciseEntity } from "./personal.exercises.entity";

@Injectable()
export class PersonalExercisesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: PersonalExerciseEntity) {
    const entityData = item.toObject();

    return await this.prisma.personalExercise.create({
      data: {...entityData}
    })
  }

  public async update(id: string, item: PersonalExerciseEntity) {
    const entityData = item.toObject();

    return await this.prisma.personalExercise.update({
      where: {
        id,
      },
      data: {...entityData}
    })
  }
}
