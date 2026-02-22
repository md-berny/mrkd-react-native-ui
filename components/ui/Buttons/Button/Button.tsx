import { borderRadius, colors } from "@/constants/tokens";
import { ThemeType, useTheme } from "@/context";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, PressableProps, StyleProp, TextStyle } from "react-native";
import { Typography } from "../../Typography/Typography";
import { TypographyVariant } from "../../Typography/Typography.types";
import {
  sizeStyles,
  stateStyles,
  typographyColors,
  typographySize,
  variantStyles,
} from "./Button.styles";
import { ButtonSize, ButtonVariant } from "./Button.types";

type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  typographyVariant?: TypographyVariant;
  typographyStyle?: StyleProp<TextStyle>;
};

export const Button = <T extends ThemeType = ThemeType>({
  leftSlot,
  rightSlot,
  style,
  children,
  variant = "primary",
  size = "sm",
  typographyVariant,
  typographyStyle,
  ...rest
}: ButtonProps) => {
  const context = useTheme<T>();

  const variantFromTheme = context?.theme?.button?.variant ?? {};
  const sizeFromTheme = context?.theme?.button?.size ?? {};

  const mergedVariant = { ...variantStyles, ...variantFromTheme } as Record<
    string,
    any
  >;
  const mergedSize = { ...sizeStyles, ...sizeFromTheme } as Record<string, any>;

  const textColor = typographyColors[variant];
  const textVariant = typographySize[size];

  const computedVariant =
    variant !== "chat"
      ? mergedVariant[variant]
      : { borderRadius: borderRadius.full };
  const computedSize = mergedSize[size];

  const renderContent = () => (
    <>
      {leftSlot}
      {typeof children === "string" ? (
        <Typography
          variant={typographyVariant ?? textVariant.typographyVariant}
          style={[{ color: textColor.color }, typographyStyle]}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
      {rightSlot}
    </>
  );

  const computeStyle = (state: any) => {
    const baseStyle = [
      computedVariant,
      computedSize,
      stateStyles.base,
      state.pressed && stateStyles.pressed,
    ];

    if (typeof style === "function") return [...baseStyle, style(state)];
    return [...baseStyle, style];
  };

  if (variant === "chat") {
    return (
      <LinearGradient
        colors={[colors.indigo[50], colors.brand[500]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: borderRadius.full }}
      >
        <Pressable {...rest} style={computeStyle}>
          {renderContent()}
        </Pressable>
      </LinearGradient>
    );
  }

  return (
    <Pressable {...rest} style={computeStyle}>
      {renderContent()}
    </Pressable>
  );
};
