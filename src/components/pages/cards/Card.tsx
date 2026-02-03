import type { Skill } from "@/domain/skills";
import type { UserSkill } from "@/domain/user_skill";
import { Users } from "@/domain/users";
import { GetAllSkill } from "@/lib/skills";
import { GetUserSkill } from "@/lib/user_skill";
import { GetUser } from "@/lib/users";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { SnsLinks } from "@/components/organisms/SnsLinks";
import { LabelValue } from "@/components/molecules/LabelValue";
import { SkillsText } from "@/components/organisms/SkillsText";
import { Loading } from "@/components/molecules/Loading";

export const Card: React.FC = () => {
  const [userData, setUserData] = useState<Users>();
  const [userSkillData, setUserSkillData] = useState<UserSkill[]>();
  const [allSkill, setAllSkill] = useState<Skill[]>();
  let params = useParams();
  const user_id = params.id;
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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
        <Loading />
      ) : (
        <Box p={8} backgroundColor="#fff" shadow="lg" borderRadius={20}>
          <Stack>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              {userData && userData.name}
            </Text>
            <LabelValue label="自己紹介">
              {userData && parse(DOMPurify.sanitize(userData.description))}
            </LabelValue>
            {userSkillData && allSkill && (
              <LabelValue label="好きな技術">
                <SkillsText userSkillData={userSkillData} allSkill={allSkill} />
              </LabelValue>
            )}
            <Box mt={2}>
              <SnsLinks
                x_id={userData?.x_id}
                qiita_id={userData?.qiita_id}
                github_id={userData?.github_id}
              />
            </Box>
            <Center w="full" mt={4}>
              <Button colorPalette="blue" onClick={() => navigate("/")}>
                戻る
              </Button>
            </Center>
          </Stack>
        </Box>
      )}
    </Center>
  );
};
