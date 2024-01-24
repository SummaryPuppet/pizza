import { getProducts } from "@/api/product";
import Loader from "@/components/ui/Loader";
import Layout from "@/layouts/Layout";
import { IProduct } from "@/types/product";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function AllProducts() {
  const { data: products, isLoading } = useQuery<IProduct[]>(
    "products",
    getProducts
  );

  if (isLoading) {
    return (
      <Layout title="Loading">
        <main className="p-4">
          <Loader />
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="All Ingredients">
      <Link
        to={"/product/create"}
        className="btn fixed bottom-5 right-5 bg-success text-xl"
      >
        +
      </Link>
      <main className="p-4">
        <ul className="grid gap-y-16 lg:grid-cols-3">
          {products?.map((product) => (
            <li
              key={product.id}
              className="card max-h-96 w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={product.imgURL} alt={product.description} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/product/${product.id}`}
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

export default AllProducts;
