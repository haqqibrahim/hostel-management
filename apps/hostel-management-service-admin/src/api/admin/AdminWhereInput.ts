import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  adminEmail?: StringNullableFilter;
  adminEmployeeId?: StringNullableFilter;
  adminName?: StringNullableFilter;
  adminPassword?: StringNullableFilter;
  adminUniqueEmail?: StringNullableFilter;
  adminUniqueName?: StringNullableFilter;
  adminUniquePassword?: StringNullableFilter;
  email?: StringNullableFilter;
  employeeId?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
};
