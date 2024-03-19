import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeInterface } from "../utils/interface";

export const ThemeContext = createContext<ThemeInterface | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within the ThemeContextProvider");
  }

  return context;
};
