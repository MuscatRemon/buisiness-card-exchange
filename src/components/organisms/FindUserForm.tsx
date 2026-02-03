import { useForm } from "react-hook-form";
import { FormInput } from "../molecules/form/FormInput";
import type { FindUserFormValues } from "@/domain/FindUserFormValues";
import { useNavigate } from "react-router";
import { Button, Center, Stack } from "@chakra-ui/react";

export const FindUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FindUserFormValues>();

  const navigate = useNavigate();

  const onSubmit = async (data: FindUserFormValues) => {
    navigate(`/cards/${data.user_id}`);
  };

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <FormInput
          label="ID"
          errorMessage={errors.user_id?.message}
          {...register("user_id", { required: "IDを入力してください" })}
        />
        <Center w="full">
          <Button colorPalette="blue" onClick={handleSubmit(onSubmit)}>
            名刺を見る
          </Button>
        </Center>
      </Stack>
    </form>
  );
};
