import {
  Spinner,
  Text,
  VStack,
  type SpinnerProps,
  type TextProps,
} from "@chakra-ui/react";

type Props = {
  spinnerColor?: SpinnerProps["color"];
  spinnerSize?: SpinnerProps["size"];
  spinnerBorderWidth?: SpinnerProps["borderWidth"];
  textColor?: TextProps["color"];
  textFontSize?: TextProps["fontSize"];
};

export const Loading = (props: Props) => {
  const {
    spinnerColor = "#fff",
    spinnerSize = "xl",
    spinnerBorderWidth = "5px",
    textColor = "#fff",
    textFontSize = "4xl",
  } = props;

  return (
    <VStack>
      <Spinner
        color={spinnerColor}
        size={spinnerSize}
        borderWidth={spinnerBorderWidth}
      />
      <Text color={textColor} fontSize={textFontSize}>
        Loading...
      </Text>
    </VStack>
  );
};
