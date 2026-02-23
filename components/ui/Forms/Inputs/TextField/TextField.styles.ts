import { loopymPallete } from "@/constants/palletes/loopym/loopymPallete";
import { borderRadius, colors, spacing } from "@/constants/tokens";
import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  base: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    backgroundColor: colors.background,
    borderWidth: spacing["px"],
    borderColor: loopymPallete.fg.disabled,
    borderRadius: borderRadius.lg,
  },
  filled: {
    borderWidth: spacing["px"],
    borderColor: loopymPallete.border.baseStronger,
  },
  focused: {
    borderWidth: spacing[0.5],
    borderColor: loopymPallete.border.baseDark,
  },
  error: {
    borderColor: loopymPallete.border.danger,
    color: loopymPallete.fg.danger,
  },
  disabled: {
    borderColor: loopymPallete.border.baseStrong,
    color: loopymPallete.fg.disabled,
  },
});

export const labelStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 0.5,
  },
});

export const rootStyles = StyleSheet.create({
  root: {
    gap: spacing[1],
  },
});

export const descriptionStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  errorContainer: {
    flexDirection: "row",
    gap: spacing[2],
    paddingTop: spacing[0.5],
  },
});
