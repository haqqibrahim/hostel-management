import { RoomAllocation } from "../roomAllocation/RoomAllocation";

export type Student = {
  createdAt: Date;
  fullName: string | null;
  id: string;
  level: number;
  matricNumber: string;
  roomAllocations?: Array<RoomAllocation>;
  roomNumber: number | null;
  updatedAt: Date;
};
