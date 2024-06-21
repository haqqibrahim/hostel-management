import { Module } from "@nestjs/common";
import { RoomAllocationModuleBase } from "./base/roomAllocation.module.base";
import { RoomAllocationService } from "./roomAllocation.service";
import { RoomAllocationController } from "./roomAllocation.controller";
import { RoomAllocationResolver } from "./roomAllocation.resolver";

@Module({
  imports: [RoomAllocationModuleBase],
  controllers: [RoomAllocationController],
  providers: [RoomAllocationService, RoomAllocationResolver],
  exports: [RoomAllocationService],
})
export class RoomAllocationModule {}
