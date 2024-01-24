import { createIngredient as createIngredientApi } from "@/api/ingredient";
import FileInput from "@/components/ui/FileInput";
import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";
import TextArea from "@/components/ui/TextArea";
import { useAuth } from "@/contexts/Auth";
import FormLayout from "@/layouts/FormLayout";
import { ICreateIngredient } from "@/types/ingredient";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

function CreateIngredient() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ICreateIngredient>({
    defaultValues: {
      description: "",
    },
  });

  const queryClient = useQueryClient();

  const createIngredient = useMutation({
    mutationFn: createIngredientApi,
    onSuccess: () => {
      queryClient.invalidateQueries("ingredients");
    },
  });

  const { user } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("createdBy", JSON.stringify(user?.id));

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    createIngredient.mutate(formData);

    reset();
  });

  return (
    <FormLayout title="Create Ingredients" onSubmit={onSubmit}>
      <Input
        label="Name"
        type="text"
        {...register("name", {
          required: "Name is require",
          minLength: 3,
        })}
        error={errors.name}
      />

      <TextArea
        label="Description"
        {...register("description")}
        error={errors.description}
      />

      <Input
        label="Unit Price"
        type="number"
        step="0.01"
        {...register("unitPrice", {
          required: "Unit price is require",
        })}
        error={errors.unitPrice}
      />
      <Input
        label="Price"
        type="number"
        step="0.01"
        {...register("price", {
          required: "Price is required",
        })}
        error={errors.price}
      />
      <Input
        label="Quantity in stock"
        type="number"
        step="0.01"
        {...register("quantityInStock", {
          required: "Quantity in stock is require",
        })}
        error={errors.quantityInStock}
      />

      <FileInput
        label="Pick a file"
        accept="image/jpeg, image/png, image/gif"
        onChange={(e: any) => setValue("ingredientImg", e.target.files[0])}
        error={errors.ingredientImg}
      />

      <SubmitButton>Create Ingredient</SubmitButton>

      {createIngredient.isSuccess ? (
        <div className="toast">
          <div className="alert alert-success">
            <span>Created</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </FormLayout>
  );
}

export default CreateIngredient;
