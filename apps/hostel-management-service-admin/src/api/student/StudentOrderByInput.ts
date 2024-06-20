import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  matricNumber?: SortOrder;
  roomNumber?: SortOrder;
  updatedAt?: SortOrder;
};
