import type { Skill } from "@/domain/skills";
import type { UserSkill } from "@/domain/user_skill";
import { Users } from "@/domain/users";
import { GetAllSkill } from "@/lib/skills";
import { GetUserSkill } from "@/lib/user_skill";
import { GetUser } from "@/lib/users";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

export const Card: React.FC = () => {
  const [userData, setUserData] = useState<Users>();
  const [userSkillData, setUserSkillData] = useState<UserSkill[]>();
  const [allSkill, setAllSkill] = useState<Skill[]>();
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

    const fetchUserSkill = async () => {
      try {
        const userSkill = await GetUserSkill(user_id);
        setUserSkillData(userSkill);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllSkill = async () => {
      try {
        const skills = await GetAllSkill();
        setAllSkill(skills);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const init = async () => {
      await fetchAllSkill();
      await fetchUser();
      await fetchUserSkill();
    };

    init();
  }, [user_id]);

  return (
    <Center h="100vh" color="#333">
      {loading ? (
        <VStack>
          <Spinner color="#fff" size="xl" borderWidth="5px" />
          <Text color="#fff" fontSize="4xl">
            Loading...
          </Text>
        </VStack>
      ) : (
        <Box p={8} backgroundColor="#fff" shadow="lg" borderRadius={20}>
          <Stack>
            <Grid>
              <GridItem>氏名</GridItem>
              <GridItem>{userData && userData.name}</GridItem>
            </Grid>
            <Grid>
              <GridItem>自己紹介</GridItem>
              <GridItem>
                {userData && parse(DOMPurify.sanitize(userData.description))}
              </GridItem>
            </Grid>
            <Grid>
              <GridItem>スキル</GridItem>
              <GridItem>
                <Flex gap={2}>
                  {userSkillData &&
                    userSkillData.map((userSkill) => {
                      const skill = allSkill?.find(
                        (skill) => skill.id === userSkill.skill_id,
                      );
                      return <Text key={userSkill.id}>{skill?.name}</Text>;
                    })}
                </Flex>
              </GridItem>
            </Grid>
          </Stack>
        </Box>
      )}
    </Center>
  );
};
