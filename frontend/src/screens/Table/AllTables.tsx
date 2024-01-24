import { getTables } from "@/api/table";
import Loader from "@/components/ui/Loader";
import Layout from "@/layouts/Layout";
import { ITable } from "@/types/table";
import { useQuery } from "react-query";

function AllTablesScreen() {
  const { data: tables, isLoading } = useQuery<ITable[]>("tables", getTables);

  if (isLoading) {
    return (
      <Layout title="Tables">
        <main className="p-4">
          <Loader />
        </main>
      </Layout>
    );
  }
  return (
    <Layout title="Tables">
      <main className="p-6">
        <ul className="grid gap-y-16 lg:grid-cols-3">
          {tables?.map((table) => (
            <li
              key={table.id}
              className="card max-h-96 w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">Table: {table.number}</h2>
                <p>Capacity: {table.capacity}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default AllTablesScreen;
