import { borderRadius, colors } from "@/constants/tokens";
import { ThemeType, useTheme } from "@/context";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, PressableProps, StyleProp, TextStyle } from "react-native";
import { TypographyVariant } from "../../Typography/Typography.types";
import { sizeStyles, stateStyles, variantStyles } from "./IconButton.styles";
import { IconButtonSize, IconButtonVariant } from "./IconButton.types";

type IconButtonProps = PressableProps & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  typographyVariant?: TypographyVariant;
  typographyStyle?: StyleProp<TextStyle>;
};

export const IconButton = <T extends ThemeType = ThemeType>({
  style,
  children,
  variant = "primary",
  size = "sm",
  ...rest
}: IconButtonProps) => {
  const context = useTheme<T>();

  const variantFromTheme = context?.theme?.button?.variant ?? {};
  const sizeFromTheme = context?.theme?.button?.size ?? {};

  const mergedVariant = { ...variantStyles, ...variantFromTheme } as Record<
    string,
    any
  >;
  const mergedSize = { ...sizeStyles, ...sizeFromTheme } as Record<string, any>;

  const computedVariant =
    variant !== "chat"
      ? mergedVariant[variant]
      : { borderRadius: borderRadius.full };
  const computedSize = mergedSize[size];

  const renderContent = () => <>{children}</>;

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
