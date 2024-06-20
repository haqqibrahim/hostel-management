import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RoomAllocationWhereInput = {
  adminApproval?: StringNullableFilter;
  allocationDate?: DateTimeNullableFilter;
  allocationStatus?: "Option1";
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
