import { TextStyle } from "react-native";
import { toneStyles, typographyVariants } from "./Typography.styles";

export type TypographyVariant = keyof typeof typographyVariants;
export type TypographyTone = keyof typeof toneStyles;

export type TypographyOverrideType<
  TVariants extends Record<string, TextStyle> = Record<string, TextStyle>,
  TTones extends Record<string, TextStyle> = Record<string, TextStyle>,
> = {
  variant?: Partial<Record<TypographyVariant, TextStyle>> & TVariants;
  tone?: Partial<Record<TypographyTone, TextStyle>> & TTones;
};
