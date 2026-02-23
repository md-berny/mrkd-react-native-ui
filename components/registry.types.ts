import { ButtonOverrideType } from "./ui/Buttons/Button/Button.types";
import { IconButtonOverrideType } from "./ui/Buttons/IconButton/IconButton.types";
import { TypographyOverrideType } from "./ui/Typography/Typography.types";

export type ComponentRegistry = {
  typography: TypographyOverrideType;
  button: ButtonOverrideType;
  iconButton: IconButtonOverrideType;
};
