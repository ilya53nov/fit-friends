import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class FavoriteGymRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(userId: string, gymId: string) {
    return await this.prisma.favoriteGym.create({
      data: {
        userId,
        gymId,
      }
    })
  }

  public async findAll(userId: string) {
    return await this.prisma.favoriteGym.findMany({
      where: {
        userId,
      }
    })
  }

  public async findById(userId: string, gymId: string) {
    return await this.prisma.favoriteGym.findFirst({
      where: {
        AND: {
          userId,
          gymId,
        }
      }
    })
  }

  public async delete(id: string) {
    return await this.prisma.favoriteGym.delete({
      where: {
        id,
      }
    })
  }
}
