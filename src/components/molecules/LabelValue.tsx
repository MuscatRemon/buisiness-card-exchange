import { Stack, Text } from "@chakra-ui/react";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const LabelValue = (props: Props) => {
  const { label, children } = props;

  return (
    <Stack gap={0}>
      <Text fontWeight="bold">{label}</Text>
      {children}
    </Stack>
  );
};
