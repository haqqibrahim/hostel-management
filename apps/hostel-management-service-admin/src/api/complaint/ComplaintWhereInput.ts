import { StringFilter } from "../../util/StringFilter";

export type ComplaintWhereInput = {
  complaint?: StringFilter;
  id?: StringFilter;
  typeField?: "Electrical" | "Plumbing" | "Furniture";
};
