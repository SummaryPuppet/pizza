import { createWaiter as createWaiterApi } from "@/api/waiter";
import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";
import FormLayout from "@/layouts/FormLayout";
import { ICreateWaiter } from "@/types/waiter";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

function AddWaiterScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ICreateWaiter>();

  const queryClient = useQueryClient();

  const createWaiter = useMutation({
    mutationFn: createWaiterApi,
    onSuccess: () => {
      queryClient.invalidateQueries("waiters");
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    createWaiter.mutate(data);

    reset();
  });

  return (
    <FormLayout title="Add Waiter" onSubmit={onSubmit}>
      <Input
        label="firstname"
        {...register("firstname", {
          required: "firstname is required",
        })}
        error={errors.firstname}
      />
      <Input
        label="lastname"
        {...register("lastname", {
          required: "lastname is required",
        })}
        error={errors.lastname}
      />
      <Input
        label="code"
        {...register("code", {
          required: "code is required",
          min: 6,
        })}
        error={errors.code}
      />

      <SubmitButton>Add Waiter</SubmitButton>
    </FormLayout>
  );
}

export default AddWaiterScreen;
