import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "adminName";

export const AdminTitle = (record: TAdmin): string => {
  return record.adminName?.toString() || String(record.id);
};
