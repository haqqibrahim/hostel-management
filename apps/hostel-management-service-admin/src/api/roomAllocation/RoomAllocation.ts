import { Room } from "../room/Room";
import { Student } from "../student/Student";

export type RoomAllocation = {
  adminApproval: string | null;
  allocationDate: Date | null;
  allocationStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  room?: Room | null;
  student?: Student | null;
  updatedAt: Date;
};
