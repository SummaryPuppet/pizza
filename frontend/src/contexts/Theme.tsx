import { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  changeItem: (t: Themes) => void;
}

const ThemeContext = createContext<ContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a AuthProvider");

  return context;
};

interface Props {
  children: React.ReactNode;
}

export type Themes =
  | "default"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "aqua"
  | "natural";

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("");

  const changeItem = (t: Themes) => {
    setTheme(t);
    let html = document.documentElement;
    html.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  };

  useEffect(() => {
    let html = document.documentElement;
    let t = localStorage.getItem("theme") ?? "default";
    setTheme(t);
    html.setAttribute("data-theme", theme);
  });

  return (
    <ThemeContext.Provider
      value={{
        changeItem,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
