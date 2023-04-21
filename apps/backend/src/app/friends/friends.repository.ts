import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FriendsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(userId: string, friendId: string) {
    await this.prisma.friend.create({      
      data: {
        userId,
        friendId,
      },
    })
  }

  public async delete(id: string) {
    return await this.prisma.friend.delete({      
      where: {
        id,
      }
    })
  }

  public async findAll(userId: string) {
    return await this.prisma.friend.findMany({      
      where: {
        userId,
      },
      select: {
        friend: true,
      }
    })
  }

  public async findById(friendId: string, userId: string) {
    return await this.prisma.friend.findFirst({      
      where: {
        AND: {
          userId,
          friendId,
        }        
      }
    })
  }
}
