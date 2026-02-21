import { defaultPallete } from "@/constants/palletes/defaultPallete";
import { StyleSheet } from "react-native";

export const typographyVariants = StyleSheet.create({
  display: {
    fontSize: 48,
    lineHeight: 48,
    fontWeight: "700",
    color: defaultPallete.fg.heading,
  },
  "title-screen": {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: "700",
    color: defaultPallete.fg.heading,
  },
  "title-section": {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "600",
    color: defaultPallete.fg.heading,
  },
  "title-subsection": {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
    color: defaultPallete.fg.heading,
  },
  "title-body": {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    color: defaultPallete.fg.heading,
  },
  "title-group": {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: defaultPallete.fg.heading,
  },
  "body-large": {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    color: defaultPallete.fg.body,
  },
  "body-large-bold": {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: defaultPallete.fg.body,
  },
  "body-large-semibold": {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: defaultPallete.fg.body,
  },
  "body-default": {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
    color: defaultPallete.fg.body,
  },
  "body-default-bold": {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
    color: defaultPallete.fg.body,
  },
  "body-small": {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: defaultPallete.fg.body,
  },
  "body-small-bold": {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    color: defaultPallete.fg.body,
  },
  "label-title": {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    color: defaultPallete.fg.heading,
  },
  "label-description": {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: defaultPallete.fg.body,
  },
  h1: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: "700",
    color: defaultPallete.fg.heading,
  },
  h2: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "600",
    color: defaultPallete.fg.heading,
  },
  h3: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    color: defaultPallete.fg.heading,
  },
  h4: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: defaultPallete.fg.heading,
  },
  p: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
    color: defaultPallete.fg.body,
  },
  lead: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "400",
    color: defaultPallete.muted.foreground,
  },
  large: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "600",
    color: defaultPallete.fg.heading,
  },
  small: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "300",
    color: defaultPallete.fg.body,
  },
  muted: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "300",
    color: defaultPallete.muted.foreground,
  },
});

export const toneStyles = StyleSheet.create({
  light: { color: "#ffffff" },
  heading: { color: defaultPallete.fg.heading },
  body: { color: defaultPallete.fg.body },
  "body-subtle": { color: defaultPallete.fg.bodySubtle },
  brand: { color: defaultPallete.fg.brand },
  success: { color: defaultPallete.fg.success },
  danger: { color: defaultPallete.fg.danger },
  warning: { color: defaultPallete.fg.warning },
  info: { color: defaultPallete.fg.info },
});
