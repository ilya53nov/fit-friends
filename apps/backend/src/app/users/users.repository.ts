import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserType } from '@fit-friends/shared-types'
import { UserEntity } from './users.entity';
import { BaseQuery } from '@fit-friends/core';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<UserType> {
    return await this.prisma.user.findFirst({
      where: {
        email,
      }
    });
  }

  public async findById(id: string): Promise<UserType> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      }
    });
  }

  public async findAll({limit, page, sortDirection}: BaseQuery): Promise<UserType[]> {
    return await this.prisma.user.findMany({
      take: limit,
      orderBy: [
        {
          createdAt: sortDirection,
        }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }  

  public async create(item: UserEntity): Promise<UserType> {
    const entityData = item.toObject();

    return await this.prisma.user.create({
      data: {...entityData},
    })
  }

  public async update(id: string, item: UserEntity): Promise<UserType> {
    const entityData = item.toObject();

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...entityData,
      }
    })
  }

}