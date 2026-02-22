import { sizeStyles, variantStyles } from "./Button.styles";

export type ButtonVariant = keyof typeof variantStyles | "chat";
export type ButtonSize = keyof typeof sizeStyles;

export type ButtonOverrideType<
  TVariants extends Record<string, any> = Record<string, any>,
  TSizes extends Record<string, any> = Record<string, any>,
> = {
  variant?: Partial<Record<ButtonVariant, any>> & TVariants;
  size?: Partial<Record<ButtonSize, any>> & TSizes;
};
