import { PropsWithChildren } from "react";

// Declare here component specific type
export type ThemeType = Partial<{}>;

export type ThemeContextType = {
  theme: ThemeType | undefined;
  setTheme: (theme: ThemeType | undefined) => void;
};

export type ThemeProviderProps = PropsWithChildren & { theme?: ThemeType };
