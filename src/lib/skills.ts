import { Skill } from "@/domain/skills";
import supabase from "@/utils/supabase";

export const GetAllSkill = async () => {
  const { data, error } = await supabase.from("skills").select();

  if (error) {
    throw new Error(error.message);
  }

  const skills = data.map((skill) => {
    return new Skill(skill.id, skill.name);
  });

  return skills;
};
