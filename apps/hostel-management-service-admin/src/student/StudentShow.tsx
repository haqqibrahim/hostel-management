import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Level" source="level" />
        <TextField label="Matric Number" source="matricNumber" />
        <TextField label="Room Number" source="roomNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RoomAllocation"
          target="studentId"
          label="RoomAllocations"
        >
          <Datagrid rowClick="show">
            <TextField label="adminApproval" source="adminApproval" />
            <TextField label="allocationDate" source="allocationDate" />
            <TextField label="allocationStatus" source="allocationStatus" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
