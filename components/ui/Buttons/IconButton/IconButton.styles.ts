import { loopymPallete } from "@/constants/palletes/loopym/loopymPallete";
import { borderRadius, colors, spacing } from "@/constants/tokens";
import { StyleSheet } from "react-native";

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
  sm: {
    padding: spacing[2],
  },
  md: {
    padding: spacing[3],
  },
  lg: {
    padding: spacing[3.5],
  },
  xl: {
    padding: spacing[4],
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
