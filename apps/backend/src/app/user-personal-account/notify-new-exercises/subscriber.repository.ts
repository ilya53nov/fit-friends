import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { SubscriberEntity } from "./subscriber.entity";

@Injectable()
export class SubscriberRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async createOrUpdate(item: SubscriberEntity) {
    const entityData = item.toObject();

    if (entityData.id) {
      return await this.prisma.subscriber.update({
        where: {
          id: entityData.id,
        },
        data: {...entityData},
      })
    }

    return await this.prisma.subscriber.create({
      data: {...entityData},
    })

  }

  public async findSubscribe(userId: string, coachId: string) {
    return await this.prisma.subscriber.findFirst({
      where: {
        AND: {
          userId,
          coachId,
        }
      }
    })
  }

  public async updateManyByCoachId(coachId: string, exerciseId: string) {
    return await this.prisma.subscriber.updateMany({
      where: {
        AND: {
          coachId,
          isActiveSubscribe: true,
        }        
      },
      data: {
        exercisesId: {
          push: exerciseId,          
        }
      }
    })
  }

  public async clearExerciseItems(userId: string) {
    return await this.prisma.subscriber.updateMany({
      where: {
        userId,
      },
      data: {
        exercisesId: {
          set: [],
        },
        lastNotifyDate: new Date(),
      }
    })
  }

  public async getExercisesId(userId: string) {
    return await this.prisma.subscriber.findMany({
      where: {
        userId,
      },
      select: {exercisesId: true},
    })
  }
}
