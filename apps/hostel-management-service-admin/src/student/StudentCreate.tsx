import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomAllocationTitle } from "../roomAllocation/RoomAllocationTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
