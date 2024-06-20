import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  adminEmail?: SortOrder;
  adminEmployeeId?: SortOrder;
  adminName?: SortOrder;
  adminPassword?: SortOrder;
  adminUniqueEmail?: SortOrder;
  adminUniqueName?: SortOrder;
  adminUniquePassword?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  employeeId?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
};
