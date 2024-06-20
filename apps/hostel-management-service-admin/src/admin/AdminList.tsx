import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdminList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Admins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="adminEmail" source="adminEmail" />
        <TextField label="admin_employee_id" source="adminEmployeeId" />
        <TextField label="adminName" source="adminName" />
        <TextField label="adminPassword" source="adminPassword" />
        <TextField label="admin_unique_email" source="adminUniqueEmail" />
        <TextField label="admin_unique_name" source="adminUniqueName" />
        <TextField label="admin_unique_password" source="adminUniquePassword" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="Employee ID" source="employeeId" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
