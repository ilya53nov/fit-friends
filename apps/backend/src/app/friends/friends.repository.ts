import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FriendsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(friendId: string, userId: string) {
    return await this.prisma.friend.create({      
      data: {
        friendId: friendId,
        userId: userId,
      },
    })
  }

  public async findAll(userId: string) {
    return await this.prisma.friend.findMany({
      where: {
        userId: userId,
      },
      select: {
        friend: true,
      }      
    })
  }
}
