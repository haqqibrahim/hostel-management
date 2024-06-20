import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ComplaintEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
