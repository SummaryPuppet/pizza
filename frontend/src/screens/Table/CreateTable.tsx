import { createTable as createTableApi } from "@/api/table";
import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";
import Toast from "@/components/ui/Toast";
import FormLayout from "@/layouts/FormLayout";
import { ICreateTable } from "@/types/table";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

function CreateTableScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ICreateTable>();

  const queryClient = useQueryClient();

  const createTable = useMutation({
    mutationFn: createTableApi,
    onSuccess: () => {
      queryClient.invalidateQueries("tables");
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    createTable.mutate(data);

    reset();
  });

  return (
    <FormLayout title="Add Table" onSubmit={onSubmit}>
      <Input
        label="number"
        type="number"
        {...register("number", {
          required: "Table number is required",
        })}
        error={errors.number}
      />
      <Input
        label="capacity"
        type="number"
        {...register("capacity", {
          required: "Capacity is required",
        })}
        error={errors.capacity}
      />

      <SubmitButton>Add Table</SubmitButton>

      {createTable.isError ? (
        <Toast text="Error" variant="error" />
      ) : createTable.isSuccess ? (
        <Toast text="Created" variant="success" />
      ) : (
        <></>
      )}
    </FormLayout>
  );
}

export default CreateTableScreen;
