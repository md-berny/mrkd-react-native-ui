import { ButtonOverrideType } from "./ui/Buttons/Button/Button.types";
import { TypographyOverrideType } from "./ui/Typography/Typography.types";

export type ComponentRegistry = {
  typography: TypographyOverrideType;
  button: ButtonOverrideType;
};
