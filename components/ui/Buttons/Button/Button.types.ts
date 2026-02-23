import { sizeStyles, variantStyles } from "./Button.styles";

export type ButtonVariant = keyof typeof variantStyles | "chat";
export type ButtonSize = keyof typeof sizeStyles;

export type ButtonOverrideType = {
  variant?: Partial<Record<ButtonVariant, any>>;
  size?: Partial<Record<ButtonSize, any>>;
};
