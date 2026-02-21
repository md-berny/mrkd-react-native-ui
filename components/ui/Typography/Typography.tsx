import { ThemeType, useTheme } from "@/context";
import { Text, TextProps, TextStyle } from "react-native";
import { toneStyles, typographyVariants } from "./Typography.styles";
import { TypographyTone, TypographyVariant } from "./Typography.types";

type TypographyProps<
  TVariants extends Record<string, TextStyle> = Record<string, never>,
  TTones extends Record<string, TextStyle> = Record<string, never>,
> = TextProps & {
  variant?: TypographyVariant | (string & keyof TVariants);
  tone?: TypographyTone | (string & keyof TTones);
};

export const Typography = <T extends ThemeType = ThemeType>({
  variant = "body-default",
  tone,
  style,
  children,
  ...props
}: TypographyProps<
  NonNullable<NonNullable<T["typography"]>["variant"]>,
  NonNullable<NonNullable<T["typography"]>["tone"]>
>) => {
  const context = useTheme<T>();

  const variantFromTheme = context?.theme?.typography?.variant ?? {};
  const toneFromTheme = context?.theme?.typography?.tone ?? {};

  const mergedVariant = {
    ...typographyVariants,
    ...variantFromTheme,
  } as Record<string, TextStyle>;

  const mergedTone = {
    ...toneStyles,
    ...toneFromTheme,
  } as Record<string, TextStyle>;

  const computedStyle =
    mergedVariant[variant as string] ?? mergedVariant["body-default"];

  const computedTone =
    tone && mergedTone[tone as string] ? mergedTone[tone as string] : undefined;

  return (
    <Text style={[computedStyle, computedTone, style]} {...props}>
      {children}
    </Text>
  );
};
