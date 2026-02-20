import { createContext, useContext, useState } from "react";
import { ThemeContextType, ThemeProviderProps } from "./ThemeContext.types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Currently, we'll still allow components to be used without the provider so we can let them consume an undefined style context

  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"] | undefined>();

  const handleSetTheme: ThemeContextType["setTheme"] = (theme) => {
    setTheme(theme);
  };

  const value = { theme, setTheme: handleSetTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
