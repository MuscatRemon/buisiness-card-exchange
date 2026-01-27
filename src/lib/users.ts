import { Users } from "@/domain/users";
import supabase from "@/utils/supabase";

export const GetAllUsers = async () => {
  const { data, error } = await supabase.from("users").select();
  if (error) {
    throw new Error(error.message);
  }

  const usersData = data.map((user) => {
    return new Users(
      user.user_id,
      user.name,
      user.description,
      user.github_id,
      user.qiita_id,
      user.x_id,
    );
  });

  return usersData;
};

export const GetUser = async (user_id: string) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("user_id", user_id)
    .single();
  if (error) {
    throw new Error(error.message);
  }

  const user = data;

  const userData = new Users(
    user.user_id,
    user.name,
    user.description,
    user.github_id,
    user.qiita_id,
    user.x_id,
  );

  return userData;
};
