import { Stack, Text } from "@chakra-ui/react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const LabelValue = (props: Props) => {
  const { label, children } = props;

  return (
    <Stack gap={0}>
      <Text fontWeight="bold">{label}</Text>
      <Text>{children}</Text>
    </Stack>
  );
};
