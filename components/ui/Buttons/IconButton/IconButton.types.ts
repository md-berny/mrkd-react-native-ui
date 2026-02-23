import { sizeStyles, variantStyles } from "./IconButton.styles";

export type IconButtonVariant = keyof typeof variantStyles | "chat";
export type IconButtonSize = keyof typeof sizeStyles;

export type IconButtonOverrideType = {
  variant?: Partial<Record<IconButtonVariant, any>>;
  size?: Partial<Record<IconButtonSize, any>>;
};
