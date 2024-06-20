import { RoomAllocationUpdateManyWithoutStudentsInput } from "./RoomAllocationUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  fullName?: string | null;
  level?: number;
  matricNumber?: string;
  roomAllocations?: RoomAllocationUpdateManyWithoutStudentsInput;
  roomNumber?: number | null;
};
