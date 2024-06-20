import { RoomAllocation as TRoomAllocation } from "../api/roomAllocation/RoomAllocation";

export const ROOMALLOCATION_TITLE_FIELD = "adminApproval";

export const RoomAllocationTitle = (record: TRoomAllocation): string => {
  return record.adminApproval?.toString() || String(record.id);
};
