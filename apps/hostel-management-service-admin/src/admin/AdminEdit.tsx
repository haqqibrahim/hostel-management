import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adminEmail" source="adminEmail" type="email" />
        <TextInput label="admin_employee_id" source="adminEmployeeId" />
        <TextInput label="adminName" source="adminName" />
        <TextInput label="adminPassword" source="adminPassword" />
        <TextInput
          label="admin_unique_email"
          source="adminUniqueEmail"
          type="email"
        />
        <TextInput label="admin_unique_name" source="adminUniqueName" />
        <TextInput label="admin_unique_password" source="adminUniquePassword" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="Employee ID" source="employeeId" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="name" source="name" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
