import { getIngredient } from "@/api/ingredient";
import Loader from "@/components/ui/Loader";
import Layout from "@/layouts/Layout";
import { IIngredient } from "@/types/ingredient";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function OneIngredient() {
  const params = useParams();
  const { data: ingredient, isLoading } = useQuery<IIngredient>(
    ["ingredient", params.id!],
    () => getIngredient(params.id!)
  );

  if (isLoading) {
    return (
      <Layout title={"Ingredient"}>
        <main className="p-4">
          <Loader />
        </main>
      </Layout>
    );
  }

  return (
    <Layout title={ingredient?.name || "Ingredient"}>
      <main className="card m-6 h-full bg-base-100 shadow-xl">
        <figure>
          <img src={ingredient?.imgURL} alt={ingredient?.name} />
        </figure>
        <div className="bg card-body gap-3">
          <h2 className="card-title text-5xl">{ingredient?.name}</h2>
          <p>{ingredient?.description}</p>
          <p>Quantity in stock: {ingredient?.quantityInStock}</p>
          <p>Unit Price:{ingredient?.unitPrice}</p>
          <p>Price: {ingredient?.price}</p>
        </div>
      </main>
    </Layout>
  );
}

export default OneIngredient;
