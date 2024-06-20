import { SortOrder } from "../../util/SortOrder";

export type ComplaintOrderByInput = {
  complaint?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
