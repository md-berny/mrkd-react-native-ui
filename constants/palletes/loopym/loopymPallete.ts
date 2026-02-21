import { colors } from "../../styles/colors/colors";

export const loopymPallete = {
  fg: {
    default: "#ffffff",
    black: colors.gray[900],
    heading: colors.neutral[900],
    body: colors.neutral[600],
    bodySubtle: colors.neutral[500],

    brand: colors.brand[500],
    brandSubtle: colors.brand[300],
    brandStrong: colors.brand[700],

    attention: colors.lemon[700],
    attentionStrong: colors.lemon[900],

    success: colors.green[700],
    successStrong: colors.green[900],

    danger: colors.red[600],
    dangerStrong: colors.red[900],

    warning: colors.tangerine[900],
    warningSubtle: colors.tangerine[600],

    info: colors.azure[700],
    infoStrong: colors.azure[900],

    violet: colors.violet[500],
    violetStrong: colors.violet[950],

    tangerine: colors.tangerine[500],
    tangerineStrong: colors.tangerine[950],

    azure: colors.azure[500],
    azureStrong: colors.azure[950],

    yellow: colors.yellow[500],
    yellowStrong: colors.yellow[900],

    disabled: colors.neutral[400],
    indigo: colors.indigo[600],
  },
  icon: {
    dark: colors.neutral[900],
    medium: colors.neutral[600],
    subtle: colors.neutral[500],
    light: "#ffffff",

    brand: colors.brand[500],
    brandStrong: colors.brand[700],
    brandStronger: colors.brand[900],

    success: colors.green[700],
    successLight: colors.green[500],
    successStrong: colors.green[900],

    warning: colors.tangerine[600],
    warningLight: colors.tangerine[500],
    warningStrong: colors.tangerine[900],

    danger: colors.red[600],
    dangerLight: colors.red[500],
    dangerStrong: colors.red[800],

    attention: colors.lemon[700],
    attentionLight: colors.lemon[500],
    attentionStrong: colors.lemon[800],

    info: colors.azure[700],
    infoLight: colors.azure[500],
    infoStrong: colors.azure[800],
  },
  background: {
    screen: "#ffffff",
    default: "#ffffff",
    card: "#ffffff",
    popover: "#ffffff",
    muted: "#f5f5f5",
    accent: "#ebebeb",
    sidebar: "#fcfcfc",
    disabled: colors.neutral[100],
  },
  brand: {
    default: colors.brand[500],
    softest: colors.brand[50],
    softer: colors.brand[100],
    soft: colors.brand[300],
    medium: colors.brand[600],
    emphasis: colors.brand[600],
    strong: colors.brand[800],
    stronger: colors.brand[900],
  },
  primary: {
    default: colors.gray[100],
    foreground: "#fcfcfc",
    soft: colors.neutral[50],
    medium: colors.neutral[200],
    strong: colors.neutral[300],
  },
  secondary: {
    default: "#ffffff",
    foreground: colors.neutral[900],
    medium: colors.gray[50],
    strong: colors.gray[100],
  },
  tertiary: {
    default: colors.gray[100],
    soft: colors.gray[100],
    medium: colors.gray[200],
  },
  success: {
    default: colors.green[400],
    softer: colors.green[100],
    soft: colors.green[200],
    medium: colors.green[300],
    strong: colors.green[700],
  },
  danger: {
    default: colors.red[400],
    softer: colors.red[100],
    soft: colors.red[200],
    medium: colors.red[300],
    strong: colors.red[700],
  },
  warning: {
    default: colors.tangerine[400],
    softer: colors.tangerine[100],
    soft: colors.tangerine[200],
    medium: colors.tangerine[300],
    strong: colors.tangerine[800],
  },
  attention: {
    default: colors.lemon[400],
    softer: colors.lemon[100],
    soft: colors.lemon[200],
    medium: colors.lemon[300],
    strong: colors.lemon[800],
  },
  info: {
    default: colors.indigo[400],
    softer: colors.indigo[100],
    soft: colors.indigo[200],
    medium: colors.indigo[300],
    strong: colors.indigo[800],
  },
  status: {
    success: "#6bad48",
    warning: "#bf9136",
    error: "#d05858",
  },
  border: {
    default: colors.gray[600],
    muted: colors.gray[50],
    success: colors.emerald[700],
    orange: colors.orange[400],

    danger: colors.rose[700],
    dangerSubtle: colors.rose[200],

    warning: colors.orange[600],
    warningSubtle: colors.orange[200],

    brand: colors.brand[700],
    brandSubtle: colors.brand[200],
    brandLight: colors.brand[600],

    base: colors.gray[200],
    baseMedium: colors.gray[300],
    baseStrong: colors.gray[400],
    baseStronger: colors.gray[800],
    baseDark: colors.gray[900],

    light: colors.gray[100],
    lightSubtle: colors.gray[100],
    lightMedium: colors.gray[100],

    buffer: "#ffffff",
    bufferMedium: "#ffffff",
    bufferStrong: "#ffffff",

    input: "#ebebeb",
    ring: "#000000",
  },
  muted: {
    default: "#f5f5f5",
    foreground: "#525252",
  },
  accent: {
    default: "#ebebeb",
    foreground: "#000000",
  },
  destructive: {
    default: "#d05858",
    foreground: "#ffffff",
  },
  violet: {
    default: colors.violet[500],
    soft: colors.violet[50],
    strong: colors.violet[950],
  },
  azure: {
    default: colors.azure[500],
    soft: colors.azure[50],
    strong: colors.azure[950],
  },
  tangerine: {
    default: colors.tangerine[500],
    strong: colors.tangerine[950],
  },
  yellow: {
    default: colors.yellow[500],
    strong: colors.yellow[950],
  },
  indigo: {
    default: colors.indigo[600],
  },
  orange: {
    default: colors.orange[400],
  },
  dark: {
    default: colors.gray[800],
    strong: colors.gray[700],
    subtle: colors.gray[500],
  },
  chart: {
    1: "#ffae04",
    2: "#2d62ef",
    3: "#a4a4a4",
    4: "#e4e4e4",
    5: "#747474",
  },
  sidebar: {
    default: "#fcfcfc",
    foreground: "#000000",
    primary: "#000000",
    primaryForeground: "#ffffff",
    accent: "#ebebeb",
    accentForeground: "#000000",
    border: "#ebebeb",
    ring: "#000000",
  },
} as const;
