import { Field, Input, type InputProps } from "@chakra-ui/react";

type Props = {
  label: string;
  errorMessage?: string;
} & InputProps;

export const FormInput = (props: Props) => {
  const { label, errorMessage, ...inputProps } = props;

  return (
    <Field.Root invalid={!!errorMessage}>
      <Field.Label>{label}</Field.Label>
      <Input variant="outline" size="sm" {...inputProps} />
      <Field.ErrorText>{errorMessage}</Field.ErrorText>
    </Field.Root>
  );
};
