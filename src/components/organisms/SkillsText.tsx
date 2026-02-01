import type { Skill } from "@/domain/skills";
import type { UserSkill } from "@/domain/user_skill";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  userSkillData: UserSkill[];
  allSkill: Skill[];
};

export const SkillsText = (props: Props) => {
  const { userSkillData, allSkill } = props;

  return (
    <Flex gap={2}>
      {userSkillData &&
        userSkillData.map((userSkill) => {
          const skill = allSkill?.find(
            (skill) => skill.id === userSkill.skill_id,
          );
          return <Text key={userSkill.id}>{skill?.name}</Text>;
        })}
    </Flex>
  );
};
