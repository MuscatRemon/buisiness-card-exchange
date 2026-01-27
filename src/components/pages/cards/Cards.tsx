import { Users } from "@/domain/users";
import { GetUser } from "@/lib/users";
import { Box, Center, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Cards = () => {
  const [userData, setUserData] = useState<Users>();
  let params = useParams();
  const user_id = params.id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user_id) return;
    const fetchUser = async () => {
      try {
        const user = await GetUser(user_id);
        setUserData(user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user_id]);

  return (
    <Box p={20}>
      <Stack>
        <Center fontSize="2xl">user_id:{userData && userData.user_id}</Center>
        <Center fontSize="2xl">name:{userData && userData.name}</Center>
        <Center fontSize="2xl">
          description:{userData && userData.description}
        </Center>
      </Stack>
    </Box>
  );
};
