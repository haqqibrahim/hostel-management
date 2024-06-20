import { StringFilter } from "../../util/StringFilter";
import { RoomAllocationListRelationFilter } from "../roomAllocation/RoomAllocationListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  roomAllocations?: RoomAllocationListRelationFilter;
};
