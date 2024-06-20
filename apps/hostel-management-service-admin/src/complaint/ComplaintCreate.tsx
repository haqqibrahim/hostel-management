import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ComplaintCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Complaint" multiline source="complaint" />
        <SelectInput
          source="typeField"
          label="Type"
          choices={[
            { label: "Electrical", value: "Electrical" },
            { label: "Plumbing", value: "Plumbing" },
            { label: "Furniture", value: "Furniture" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
