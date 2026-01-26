import supabase from "@/utils/supabase";

export const SupabaseTest = async () => {
  const { data, error } = await supabase.from("users").select();
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
};
