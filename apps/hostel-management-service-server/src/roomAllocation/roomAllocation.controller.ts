import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoomAllocationService } from "./roomAllocation.service";
import { RoomAllocationControllerBase } from "./base/roomAllocation.controller.base";

@swagger.ApiTags("roomAllocations")
@common.Controller("roomAllocations")
export class RoomAllocationController extends RoomAllocationControllerBase {
  constructor(protected readonly service: RoomAllocationService) {
    super(service);
  }
}
