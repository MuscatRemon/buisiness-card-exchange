import { UserSkill } from "@/domain/user_skill";
import supabase from "@/utils/supabase";

export const GetUserSkill = async (user_id: string) => {
  const { data, error } = await supabase
    .from("user_skill")
    .select()
    .eq("user_id", user_id);
  if (error) {
    throw new Error(error.message);
  }

  const userSkills = data.map((userSkill) => {
    return new UserSkill(userSkill.id, userSkill.user_id, userSkill.skill_id);
  });

  return userSkills;
};
