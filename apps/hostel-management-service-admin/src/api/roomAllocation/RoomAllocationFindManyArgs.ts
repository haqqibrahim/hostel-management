import { RoomAllocationWhereInput } from "./RoomAllocationWhereInput";
import { RoomAllocationOrderByInput } from "./RoomAllocationOrderByInput";

export type RoomAllocationFindManyArgs = {
  where?: RoomAllocationWhereInput;
  orderBy?: Array<RoomAllocationOrderByInput>;
  skip?: number;
  take?: number;
};
