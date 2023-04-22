import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { PurchaseTypeEnum } from "@fit-friends/shared-types";
import { UpdateUserBalanceDto } from "@fit-friends/shared-dto";

@Injectable()
export class BalanceRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(userId: string, updateUserBalanceDto: UpdateUserBalanceDto) {
    return await this.prisma.userBalance.create({
      data: {
        userId,
        ...updateUserBalanceDto,
      }
    })
  }  

  public async findByType(userId: string, purchaseType: string) {
    return await this.prisma.userBalance.findFirst({
      where: {
        AND: {
          purchaseType,
          userId
        }        
      }
    })
  }

  public async findAll(userId: string) {
    return await this.prisma.userBalance.findMany({
      where: {
        userId,
      }
    })
  } 

  public async increment(id: string, count: number) {
    return await this.prisma.userBalance.update({
      where: {
        id,
      },
      data: {
        count: {
          increment: count,
        }
      }
    })
  }

  public async decrement(id: string, count: number) {
    return await this.prisma.userBalance.update({
      where: {
        id,
      },
      data: {
        count: {
          decrement: count,
        }
      }
    })
  }
}
