import { PropsWithChildren } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import {
  TypographyTone,
  TypographyVariant,
} from "../../../Typography/Typography.types";

export type TextFieldContextType = {
  disabled?: boolean;
  error?: boolean;
};

export type TextFieldRootProps = PropsWithChildren<TextFieldContextType>;

export type TextFieldLabelProps = PropsWithChildren<{
  required?: boolean;
  textStyle?: StyleProp<TextStyle>;
  carretStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}>;

export type TextFieldDescriptionProps = PropsWithChildren<{
  errorMessage?: string;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
}>;

export type TextFieldInputProps = Omit<TextInputProps, "disabled">;

export type TextFieldOverrideType = {
  base?: Partial<StyleProp<TextInputProps>>;
  filled?: Partial<StyleProp<TextInputProps>>;
  focused?: Partial<StyleProp<TextInputProps>>;
  error?: Partial<StyleProp<TextInputProps>>;
  disabled?: Partial<StyleProp<TextInputProps>>;
  label?: {
    variant?: TypographyVariant;
    tone?: TypographyTone;
  };
  description?: {
    variant?: TypographyVariant;
    tone?: TypographyTone;
  };
  errorMessage?: {
    variant?: TypographyVariant;
    tone?: TypographyTone;
  };
};
