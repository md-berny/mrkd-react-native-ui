import { TextStyle } from "react-native";
import { toneStyles, typographyVariants } from "./Typography.styles";

export type TypographyVariant = keyof typeof typographyVariants;
export type TypographyTone = keyof typeof toneStyles;

export type TypographyOverrideType = {
  variant?: Partial<Record<TypographyVariant, TextStyle>>;
  tone?: Partial<Record<TypographyTone, TextStyle>>;
};
