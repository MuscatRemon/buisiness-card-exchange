import { Box, Center, Heading } from "@chakra-ui/react";
import { RegisterForm } from "../organisms/RegisterForm";
import { useEffect, useState } from "react";
import type { Skill } from "@/domain/skills";
import { GetAllSkill } from "@/lib/skills";

export const Register = () => {
  const [allSkill, setAllSkill] = useState<Skill[]>();
  const [skillLoading, setSkillLoading] = useState(true);

  useEffect(() => {
    const fetchAllSkill = async () => {
      try {
        const skills = await GetAllSkill();
        setAllSkill(skills);
      } catch (error) {
        console.error(error);
      } finally {
        setSkillLoading(false);
      }
    };
    fetchAllSkill();
  }, []);

  return (
    <Box p={8} h="100vh">
      <Center>
        <Heading>新規名刺登録</Heading>
      </Center>
      <Center mt={4}>
        <Box w={300} p={4} background="#fff" shadow="lg" borderRadius={20}>
          <form>
            <RegisterForm allSkill={allSkill} skillLoading={skillLoading} />
          </form>
        </Box>
      </Center>
    </Box>
  );
};
