import { RoomAllocation } from "../roomAllocation/RoomAllocation";

export type Room = {
  createdAt: Date;
  id: string;
  roomAllocations?: Array<RoomAllocation>;
  updatedAt: Date;
};
