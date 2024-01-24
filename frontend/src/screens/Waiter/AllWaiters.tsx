import { getWaiters } from "@/api/waiter";
import Loader from "@/components/ui/Loader";
import Layout from "@/layouts/Layout";
import { IWaiter } from "@/types/waiter";
import { useQuery } from "react-query";

function AllWaitersScreen() {
  const { data: waiters, isLoading } = useQuery<IWaiter[]>(
    "waiters",
    getWaiters
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
    <Layout title="Waiters">
      <main className="p-6">
        <ul className="grid gap-y-16 lg:grid-cols-3">
          {waiters?.map((waiter) => (
            <li
              key={waiter.id}
              className="card max-h-96 w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">
                  {waiter.firstname} {waiter.lastname}
                </h2>
                <p>code: {waiter.code}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default AllWaitersScreen;
