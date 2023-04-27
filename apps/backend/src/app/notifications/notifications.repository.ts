import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsEntity } from './notifications.entity';

@Injectable()
export class NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}  

  public async findAll(userId: string) {
    return await this.prisma.notification.findMany({
      where: {
        userId,
      }
    })
  }

  public async findById(id: string) {
    return await this.prisma.notification.findFirst({
      where: {
        id,
      }
    })
  }

  public async remove(id: string) {
    await this.prisma.notification.delete({
      where: {
        id,
      }
    })
  }

  public async create(item: NotificationsEntity) {
    const entityData = item.toObject();

    return await this.prisma.notification.create({
      data: {...entityData}
    })
  }
  
}
