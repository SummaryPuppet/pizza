import { useAuth } from "@/contexts/Auth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (!isAuthenticated && !loading) return <Navigate to={"/login"} replace />;

  return <Outlet />;
};
