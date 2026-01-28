import type { Skill } from "@/domain/skills";
import type { UserSkill } from "@/domain/user_skill";
import { Users } from "@/domain/users";
import { GetAllSkill } from "@/lib/skills";
import { GetUserSkill } from "@/lib/user_skill";
import { GetUser } from "@/lib/users";
import { Box, Center, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Cards = () => {
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
    <Box p={20}>
      {loading ? (
        <Center fontSize={"2xl"}>Now Loading...</Center>
      ) : (
        <Stack>
          <Center fontSize="2xl">user_id:{userData && userData.user_id}</Center>
          <Center fontSize="2xl">name:{userData && userData.name}</Center>
          <Center fontSize="2xl">
            description:{userData && userData.description}
          </Center>
          {userSkillData &&
            userSkillData.map((userSkill) => {
              const skill = allSkill?.find(
                (skill) => skill.id === userSkill.skill_id,
              );
              return (
                <Center key={userSkill.id} fontSize="2xl">
                  userSkill: {skill?.name}
                </Center>
              );
            })}
        </Stack>
      )}
    </Box>
  );
};
