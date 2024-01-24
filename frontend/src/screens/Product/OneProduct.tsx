import { getProduct } from "@/api/product";
import Loader from "@/components/ui/Loader";
import Layout from "@/layouts/Layout";
import { IProduct } from "@/types/product";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function OneProduct() {
  const params = useParams();
  const { data: product, isLoading } = useQuery<IProduct>(
    ["product", params.id!],
    () => getProduct(params.id!)
  );

  if (isLoading) {
    return (
      <Layout title={"Product"}>
        <main className="p-4">
          <Loader />
        </main>
      </Layout>
    );
  }

  return (
    <Layout title={"product"}>
      <main className="card m-6 h-full bg-base-100 shadow-xl">
        <figure>
          <img
            className="max-h-52"
            src={product?.imgURL}
            alt={product?.description}
          />
        </figure>
        <div className="bg card-body gap-3">
          <h2 className="card-title text-5xl">{product?.name}</h2>
          <span className="grid h-full grid-cols-1 xl:grid-cols-3 xl:place-content-start">
            <p>{product?.description}</p>
            <p>Quantity in stock: {product?.quantityInStock}</p>
            <p>Price: {product?.price}</p>
            <p>Cost: {product?.cost}</p>
            <p>Category: {product?.category}</p>
          </span>
        </div>
      </main>
    </Layout>
  );
}

export default OneProduct;
