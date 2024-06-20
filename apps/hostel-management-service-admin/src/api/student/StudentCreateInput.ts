import { RoomAllocationCreateNestedManyWithoutStudentsInput } from "./RoomAllocationCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  fullName?: string | null;
  level: number;
  matricNumber: string;
  roomAllocations?: RoomAllocationCreateNestedManyWithoutStudentsInput;
  roomNumber?: number | null;
};
