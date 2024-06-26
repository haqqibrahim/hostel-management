/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  RoomAllocation as PrismaRoomAllocation,
  Room as PrismaRoom,
} from "@prisma/client";

export class RoomAllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RoomAllocationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.roomAllocation.count(args);
  }

  async roomAllocations(
    args: Prisma.RoomAllocationFindManyArgs
  ): Promise<PrismaRoomAllocation[]> {
    return this.prisma.roomAllocation.findMany(args);
  }
  async roomAllocation(
    args: Prisma.RoomAllocationFindUniqueArgs
  ): Promise<PrismaRoomAllocation | null> {
    return this.prisma.roomAllocation.findUnique(args);
  }
  async createRoomAllocation(
    args: Prisma.RoomAllocationCreateArgs
  ): Promise<PrismaRoomAllocation> {
    return this.prisma.roomAllocation.create(args);
  }
  async updateRoomAllocation(
    args: Prisma.RoomAllocationUpdateArgs
  ): Promise<PrismaRoomAllocation> {
    return this.prisma.roomAllocation.update(args);
  }
  async deleteRoomAllocation(
    args: Prisma.RoomAllocationDeleteArgs
  ): Promise<PrismaRoomAllocation> {
    return this.prisma.roomAllocation.delete(args);
  }

  async getRoom(parentId: string): Promise<PrismaRoom | null> {
    return this.prisma.roomAllocation
      .findUnique({
        where: { id: parentId },
      })
      .room();
  }
}
