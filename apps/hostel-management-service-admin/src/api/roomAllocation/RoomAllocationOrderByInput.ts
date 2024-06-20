import { SortOrder } from "../../util/SortOrder";

export type RoomAllocationOrderByInput = {
  adminApproval?: SortOrder;
  allocationDate?: SortOrder;
  allocationStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
