import Stat from "@/components/ui/Stat";
import Stats from "@/components/ui/Stats";
import { useAuth } from "@/contexts/Auth";
import Layout from "@/layouts/Layout";

function DashboardScreen() {
  const { user } = useAuth();

  return (
    <Layout title="Dashboard">
      <div className="hero h-full bg-base-200">
        <div className="hero-content">
          <main className="lg:max-w-7xl">
            <h1 className="text-3xl font-bold lg:text-5xl">{user?.username}</h1>
            <div className="py-6">
              <Stats>
                <Stat title="Created At" value={user!.createdAt!} />
                <Stat title="helloo" value="hola" />
              </Stats>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardScreen;
