import * as graphql from "@nestjs/graphql";
import { RoomAllocationResolverBase } from "./base/roomAllocation.resolver.base";
import { RoomAllocation } from "./base/RoomAllocation";
import { RoomAllocationService } from "./roomAllocation.service";

@graphql.Resolver(() => RoomAllocation)
export class RoomAllocationResolver extends RoomAllocationResolverBase {
  constructor(protected readonly service: RoomAllocationService) {
    super(service);
  }
}
