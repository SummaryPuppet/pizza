import { useAuth } from "@/contexts/Auth";
import Layout from "@/layouts/Layout";
import { Link } from "react-router-dom";

function HomeScreen() {
  const { isAuthenticated } = useAuth();

  return (
    <Layout title="Welcome to pizzeta">
      <main className="hero h-full bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="pb-6 text-5xl font-bold">Hello to Pizzeta </h1>
            <div className="flex justify-center gap-5">
              {isAuthenticated ? (
                <>
                  <Link to={"/dashboard"} className="btn btn-primary">
                    Dashboard
                  </Link>
                  <Link to={"/ingredients"} className="btn btn-secondary">
                    Ingredients
                  </Link>
                  <Link to={"/products"} className="btn btn-accent">
                    Products
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="btn btn-primary">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn btn-secondary">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default HomeScreen;
