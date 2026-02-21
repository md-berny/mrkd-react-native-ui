// ThemeContext.types.ts
import { ComponentRegistry } from "@/components/registry.types";
import { PropsWithChildren } from "react";

export type ThemeType = Partial<ComponentRegistry>;

export type ThemeContextType<T extends ThemeType = ThemeType> = {
  theme: T | undefined;
  setTheme: (theme: T | undefined) => void;
};

export type ThemeProviderProps<T extends ThemeType> = PropsWithChildren & {
  theme?: T;
};
