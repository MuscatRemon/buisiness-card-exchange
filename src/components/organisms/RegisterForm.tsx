import type { RegisterFormValues } from "@/domain/RegisterFormValues";
import { Button, Center, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormInput } from "../molecules/form/FormInput";
import { FormSelect } from "../molecules/form/FormSelect";
import type { Skill } from "@/domain/skills";

type Props = {
  allSkill?: Skill[];
  skillLoading: boolean;
};

export const RegisterForm = (props: Props) => {
  const { allSkill, skillLoading } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit = async (data: RegisterFormValues) => {
    console.log(data);
    // await updateRecord(editRecord.id, data.title, data.time);
    // await onUpdated();
    // onClose();
  };

  return (
    <Stack gap="4" align="flex-start" maxW="sm">
      <FormInput
        label="好きな英単語"
        errorMessage={errors.user_id?.message}
        placeholder="happy"
        {...register("user_id", { required: "好きな英単語の入力は必須です" })}
      />
      <FormInput
        label="お名前"
        errorMessage={errors.name?.message}
        placeholder="佐藤太郎"
        {...register("name", { required: "お名前の入力は必須です" })}
      />
      <FormInput
        label="自己紹介"
        errorMessage={errors.description?.message}
        placeholder="<h1>HTMLタグも使えます<h1>"
        {...register("description", { required: "自己紹介の入力は必須です" })}
      />
      <FormSelect
        allSkill={allSkill}
        skillLoading={skillLoading}
        label="好きな技術"
        errorMessage={errors.skill?.message}
        fieldProps={{
          ...register("skill", { required: "好きな技術の入力は必須です" }),
        }}
      />
      <FormInput
        label="X ID"
        errorMessage={errors.x_id?.message}
        placeholder="your X ID"
        {...register("x_id")}
      />
      <FormInput
        label="qiita ID"
        errorMessage={errors.qiita_id?.message}
        placeholder="your qiita ID"
        {...register("qiita_id")}
      />
      <FormInput
        label="GitHub ID"
        errorMessage={errors.github_id?.message}
        placeholder="your GitHub ID"
        {...register("github_id")}
      />
      <Center w="full">
        <Button onClick={handleSubmit(onSubmit)}>登録する</Button>
      </Center>
    </Stack>
  );
};
