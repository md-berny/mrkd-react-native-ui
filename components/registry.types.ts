import { ButtonOverrideType } from "./ui/Buttons/Button/Button.types";
import { IconButtonOverrideType } from "./ui/Buttons/IconButton/IconButton.types";
import { TypographyOverrideType } from "./ui/Typography/Typography.types";

import { TextFieldOverrideType } from "./ui/Forms/Inputs/TextField/TextField.types";

export interface ComponentRegistry {
  typography: TypographyOverrideType;
  button: ButtonOverrideType;
  iconButton: IconButtonOverrideType;
  textField: TextFieldOverrideType;
}
