import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { RoomAllocationListRelationFilter } from "../roomAllocation/RoomAllocationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StudentWhereInput = {
  fullName?: StringNullableFilter;
  id?: StringFilter;
  level?: IntFilter;
  matricNumber?: StringFilter;
  roomAllocations?: RoomAllocationListRelationFilter;
  roomNumber?: IntNullableFilter;
};
