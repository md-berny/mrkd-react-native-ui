import { loopymPallete } from "@/constants/palletes/loopym/loopymPallete";
import { borderRadius, colors, spacing } from "@/constants/styles";
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
  pressed: {
    opacity: 0.8,
  },
});
