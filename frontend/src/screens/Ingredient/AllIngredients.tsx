import { getIngredients } from "@/api/ingredient";
import Loader from "@/components/ui/Loader";
import Layout from "@/layouts/Layout";
import { IIngredient } from "@/types/ingredient";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function AllIngredientsScreen() {
  const { data: ingredients, isLoading } = useQuery<IIngredient[]>(
    "ingredients",
    getIngredients
  );

  if (isLoading) {
    return (
      <Layout title="Ingredients">
        <main className="p-4">
          <Loader />
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Ingredients">
      <Link
        to={"/ingredient/create"}
        className="btn fixed bottom-5 right-5 z-20 h-14 w-14 bg-success text-xl"
      >
        +
      </Link>
      <main className="p-4">
        <ul className="grid gap-y-16 lg:grid-cols-3">
          {ingredients?.map((ingredient) => (
            <li
              key={ingredient.id}
              className="card max-h-96 w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={ingredient.imgURL} alt={ingredient.description} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ingredient.name}</h2>
                <p>{ingredient.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/ingredient/${ingredient.id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default AllIngredientsScreen;
