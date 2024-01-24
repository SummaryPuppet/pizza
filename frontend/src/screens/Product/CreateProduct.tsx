import { getIngredients } from "@/api/ingredient";
import { createProduct as createProductApi } from "@/api/product";
import FileInput from "@/components/ui/FileInput";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import SubmitButton from "@/components/ui/SubmitButton";
import TextArea from "@/components/ui/TextArea";
import { useAuth } from "@/contexts/Auth";
import FormLayout from "@/layouts/FormLayout";
import { IIngredient } from "@/types/ingredient";
import { ICreateProduct } from "@/types/product";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";

function CreateProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ICreateProduct>();

  const { user } = useAuth();

  const { data: allIngredients } = useQuery<IIngredient[]>(
    "ingredients",
    getIngredients
  );

  const queryClient = useQueryClient();

  const createProduct = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const addIngredient = (newIngredient: IIngredient) => {
    if (ingredients.includes(newIngredient)) {
      setIngredients((value) =>
        value.filter((ingredient) => ingredient != newIngredient)
      );
    } else {
      setIngredients((value) => [...value, newIngredient]);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      formData.append("createdBy", JSON.stringify(user?.id));

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const ingredientsId = ingredients.map((ingredient) => ingredient.id);
      formData.append("ingredients", JSON.stringify(ingredientsId));

      createProduct.mutate(formData);

      reset();
    } catch (error) {}
  });

  return (
    <FormLayout title="Create Product" onSubmit={onSubmit}>
      <Input
        label="name"
        {...register("name", {
          required: "Name is required",
          minLength: 3,
        })}
        error={errors.name}
      />

      <TextArea
        label="description"
        {...register("description")}
        error={errors.description}
      />

      <Input
        label="price"
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

      <Select
        label="Category"
        {...register("category")}
        error={errors.category}
      >
        <option value="pizza">pizza</option>
        <option value="lasagna">lasagna</option>
        <option value="drink">drink</option>
        <option value="aditional">aditional</option>
      </Select>

      <FileInput
        label="Pick a file"
        accept="image/jpeg, image/png, image/gif"
        onChange={(e: any) => setValue("productImg", e.target.files[0])}
        error={errors.productImg}
      />

      <Modal title="Ingredients" btnTitle="add ingredients">
        <ul className="grid max-h-64 grid-cols-4 gap-2 overflow-y-auto p-2">
          {allIngredients?.map((ingredient) => (
            <li
              key={ingredient.id}
              className="text-center hover:ring hover:ring-red-500"
            >
              <button
                className={`${
                  ingredients.includes(ingredient) ? "bg-red-500" : ""
                }`}
                onClick={() => addIngredient(ingredient)}
                type="button"
              >
                <img
                  src={ingredient.imgURL}
                  alt={ingredient.description}
                  className="max-h-14"
                />
                <span>{ingredient.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </Modal>

      <SubmitButton>Create Product</SubmitButton>
      {createProduct.isError ? (
        <div className="toast">
          <div className="alert alert-error">
            <span>Error</span>
          </div>
        </div>
      ) : createProduct.isSuccess ? (
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

export default CreateProduct;
