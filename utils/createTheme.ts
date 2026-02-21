import { ComponentRegistry } from "@/components/registry.types";

export const createTheme = <T extends Partial<ComponentRegistry>>(
  theme: T,
): T => {
  return theme;
};
