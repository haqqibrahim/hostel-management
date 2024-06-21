import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoomAllocationServiceBase } from "./base/roomAllocation.service.base";

@Injectable()
export class RoomAllocationService extends RoomAllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
