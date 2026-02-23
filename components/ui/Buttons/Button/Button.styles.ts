import { loopymPallete } from "@/constants/palletes/loopym/loopymPallete";
import { borderRadius, colors, spacing } from "@/constants/tokens";
import { StyleSheet } from "react-native";
import { TypographyVariant } from "../../Typography/Typography.types";
import { ButtonSize, ButtonVariant } from "./Button.types";

export const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: loopymPallete.brand.default,
    borderRadius: borderRadius.full,
  },
  secondary: {
    backgroundColor: loopymPallete.brand.softer,
    borderRadius: borderRadius.full,
  },
  tertiary: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  tertiaryDark: {
    backgroundColor: loopymPallete.tertiary.medium,
    borderRadius: borderRadius.full,
  },
  quarternary: {
    backgroundColor: loopymPallete.brand.stronger,
    borderRadius: borderRadius.full,
  },
  success: {
    backgroundColor: loopymPallete.success.softer,
    borderRadius: borderRadius.full,
  },
  danger: {
    backgroundColor: loopymPallete.danger.softer,
    borderRadius: borderRadius.full,
  },
  warning: {
    backgroundColor: loopymPallete.warning.softer,
    borderRadius: borderRadius.full,
  },
  info: {
    backgroundColor: loopymPallete.info.softer,
    borderRadius: borderRadius.full,
  },
  outline: {
    backgroundColor: colors.background,
    borderColor: loopymPallete.border.baseDark,
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
});

export const sizeStyles = StyleSheet.create({
  xs: {
    paddingVertical: spacing[0.5],
    paddingHorizontal: spacing[2],
    gap: spacing[1.5],
  },
  sm: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    gap: spacing[1.5],
  },
  md: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    gap: spacing[2],
  },
  lg: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  xl: {
    paddingVertical: spacing[3.5],
    paddingHorizontal: spacing[6],
    gap: spacing[2],
  },
});

export const stateStyles = StyleSheet.create({
  base: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});

export const typographyColors: Record<ButtonVariant, { color: string }> = {
  chat: {
    color: loopymPallete.fg.black,
  },
  primary: {
    color: loopymPallete.fg.black,
  },
  secondary: {
    color: loopymPallete.fg.black,
  },
  tertiary: {
    color: loopymPallete.fg.black,
  },
  tertiaryDark: {
    color: loopymPallete.fg.black,
  },
  quarternary: {
    color: loopymPallete.fg.default,
  },
  success: {
    color: loopymPallete.fg.black,
  },
  danger: {
    color: loopymPallete.fg.black,
  },
  warning: {
    color: loopymPallete.fg.black,
  },
  info: {
    color: loopymPallete.fg.black,
  },
  outline: {
    color: loopymPallete.fg.black,
  },
};

export const typographySize: Record<
  ButtonSize,
  { typographyVariant: TypographyVariant }
> = {
  xs: {
    typographyVariant: "body-small-bold",
  },
  sm: {
    typographyVariant: "body-small-bold",
  },
  md: {
    typographyVariant: "body-default-bold",
  },
  lg: {
    typographyVariant: "body-large-bold",
  },
  xl: {
    typographyVariant: "body-large-bold",
  },
};
