import type { Skill } from "@/domain/skills";
import {
  Center,
  Field,
  NativeSelect,
  type NativeSelectFieldProps,
  type NativeSelectRootProps,
} from "@chakra-ui/react";
import { Loading } from "../Loading";

type Props = {
  allSkill?: Skill[];
  skillLoading: boolean;
  label: string;
  errorMessage?: string;
  rootProps?: NativeSelectRootProps;
  fieldProps?: NativeSelectFieldProps;
};

export const FormSelect = (props: Props) => {
  const { label, errorMessage, allSkill, skillLoading, rootProps, fieldProps } =
    props;

  return (
    <Field.Root invalid={!!errorMessage}>
      <Field.Label>{label}</Field.Label>
      {skillLoading ? (
        <Center w="full">
          <Loading
            spinnerColor="black"
            spinnerSize="sm"
            spinnerBorderWidth="1px"
            textColor="black"
            textFontSize={8}
          />
        </Center>
      ) : (
        <>
          <NativeSelect.Root variant="outline" size="sm" {...rootProps}>
            <NativeSelect.Field {...fieldProps}>
              {allSkill &&
                allSkill.map((skill) => (
                  <option key={skill.id} value={skill.name}>
                    {skill.name}
                  </option>
                ))}
            </NativeSelect.Field>
          </NativeSelect.Root>
          <Field.ErrorText>{errorMessage}</Field.ErrorText>
        </>
      )}
    </Field.Root>
  );
};
