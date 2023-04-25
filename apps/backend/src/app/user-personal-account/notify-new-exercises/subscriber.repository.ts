import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { SubscriberEntity } from "./subscriber.entity";

@Injectable()
export class SubscriberRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: SubscriberEntity) {
    const entityData = item.toObject();

    return await this.prisma.subscriber.create({
      data: {...entityData},
    })
  }

  public async findCoachSubscriber(userId: string, coachId: string) {
    return await this.prisma.subscriber.findFirst({
      where: {
        AND: {
          userId,
          coachId,
        }
      }
    })
  }

  public async update(id: string, item: SubscriberEntity) {
    const entityData = item.toObject();

    return await this.prisma.subscriber.update({
      where: {
        id,
      },
      data: {...entityData}
    })
  }

  public async updateManyByCoachId(coachId: string, exerciseId: string) {
    return await this.prisma.subscriber.updateMany({
      where: {
        coachId,
      },
      data: {
        exercises: {
          push: exerciseId,          
        }
      }
    })
  }

  public async clearExerciseItems(id: string) {
    return await this.prisma.subscriber.update({
      where: {
        id,
      },
      data: {
        exercises: {
          set: null,
        }
      }
    })
  }

  //public async unsubscribe
}
