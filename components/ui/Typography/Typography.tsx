import { useTheme } from "@/context";
import { Text, TextProps, TextStyle } from "react-native";
import { toneStyles, typographyVariants } from "./Typography.styles";
import { TypographyTone, TypographyVariant } from "./Typography.types";

type TypographyProps = TextProps & {
  variant?: TypographyVariant;
  tone?: TypographyTone;
};

export const Typography = ({
  variant = "body-default",
  tone,
  style,
  children,
  ...props
}: TypographyProps) => {
  const context = useTheme();

  const variantFromTheme = context?.theme?.typography?.variant ?? {};
  const toneFromTheme = context?.theme?.typography?.tone ?? {};

  const mergedVariant = {
    ...typographyVariants,
    ...variantFromTheme,
  } as Record<string, TextStyle>;
  const mergedTone = { ...toneStyles, ...toneFromTheme } as Record<
    string,
    TextStyle
  >;

  return (
    <Text
      style={[
        mergedVariant[variant],
        tone ? mergedTone[tone] : undefined,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
