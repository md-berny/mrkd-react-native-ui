import { createContext, useContext, useState } from "react";
import {
  ThemeContextType,
  ThemeProviderProps,
  ThemeType,
} from "./ThemeContext.types";

const ThemeContext = createContext<ThemeContextType<any> | undefined>(
  undefined,
);

export const useTheme = <T extends ThemeType = ThemeType>() => {
  return useContext(ThemeContext) as ThemeContextType<T> | undefined;
};

export const ThemeProvider = <T extends ThemeType>({
  children,
  theme: initialTheme,
}: ThemeProviderProps<T>) => {
  const [theme, setTheme] = useState<T | undefined>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
