import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomAllocationTitle } from "../roomAllocation/RoomAllocationTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Full Name" source="fullName" />
        <NumberInput step={1} label="Level" source="level" />
        <TextInput label="Matric Number" source="matricNumber" />
        <ReferenceArrayInput
          source="roomAllocations"
          reference="RoomAllocation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomAllocationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Room Number" source="roomNumber" />
      </SimpleForm>
    </Edit>
  );
};
