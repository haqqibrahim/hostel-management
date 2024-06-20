import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RoomAllocationCreateInput = {
  adminApproval?: string | null;
  allocationDate?: Date | null;
  allocationStatus?: "Option1" | null;
  room?: RoomWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
