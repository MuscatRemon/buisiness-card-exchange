import { Box, Center, Heading } from "@chakra-ui/react";
import { FindUserForm } from "../organisms/FindUserForm";

export const Top = () => {
  return (
    <Box p={8} h="100vh">
      <Center>
        <Heading>新規名刺登録</Heading>
      </Center>
      <Center mt={4}>
        <Box w={300} p={4} background="#fff" shadow="lg" borderRadius={20}>
          <FindUserForm />
        </Box>
      </Center>
    </Box>
  );
};
