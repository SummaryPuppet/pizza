import {
  checkLogin as checkLoginApi,
  signin as signinApi,
  signup as signupApi,
} from "@/api/auth";
import { IUser } from "@/types/user";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  signup: (user: IUser) => Promise<void>;
  signin: (user: IUser) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<ContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");

  return context;
};

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (user: IUser) => {
    try {
      const res = await signupApi(user);

      if (res.ok) {
        const data = await res.json();
        setUser(data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signin = async (user: IUser) => {
    try {
      const response = await signinApi(user);

      if (!response.ok) throw new Error("Error");

      const data = await response.json();
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        console.log(cookies);
        const response = await checkLoginApi(cookies);
        console.log(response);

        if (!response.ok) throw new Error("Error from server");

        const data = await response.json();
        if (!data) return setIsAuthenticated(false);

        setIsAuthenticated(true);
        setUser(data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        signup,
        signin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
