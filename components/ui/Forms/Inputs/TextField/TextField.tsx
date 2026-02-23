import { Typography } from "@/components/ui/Typography/Typography";
import { loopymPallete } from "@/constants/palletes/loopym/loopymPallete";
import { colors } from "@/constants/tokens";
import { useTheme } from "@/context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createContext, useContext, useState } from "react";
import { TextInput, View } from "react-native";
import {
  descriptionStyles,
  inputStyles,
  labelStyles,
  rootStyles,
} from "./TextField.styles";
import {
  TextFieldContextType,
  TextFieldDescriptionProps,
  TextFieldInputProps,
  TextFieldLabelProps,
  TextFieldRootProps,
} from "./TextField.types";

const TextFieldContext = createContext<TextFieldContextType | undefined>(
  undefined,
);

const useTextFieldContext = () => {
  const context = useContext(TextFieldContext);

  if (!context) {
    throw new Error(
      "useTextFieldContext can only be used inside TextField.Root",
    );
  }

  return context;
};

const Root = ({ children, disabled, error }: TextFieldRootProps) => {
  return (
    <TextFieldContext.Provider value={{ disabled, error }}>
      <View style={rootStyles.root}>{children}</View>
    </TextFieldContext.Provider>
  );
};

const Label = ({
  children,
  required,
  textStyle,
  carretStyle,
  viewStyle,
}: TextFieldLabelProps) => {
  const { error, disabled } = useTextFieldContext();
  const themeContext = useTheme();
  const labelOverride = themeContext?.theme?.textField?.label;

  return (
    <View style={[labelStyles.container, viewStyle]}>
      <Typography
        variant={labelOverride?.variant ?? "label-title"}
        tone={error ? "danger" : (labelOverride?.tone ?? undefined)}
        style={[textStyle, disabled && { color: loopymPallete.fg.disabled }]}
      >
        {children}
      </Typography>
      {required ? (
        <Typography
          variant={labelOverride?.variant ?? "label-title"}
          tone="danger"
          style={carretStyle}
        >
          *
        </Typography>
      ) : null}
    </View>
  );
};

const Description = ({
  children,
  errorMessage,
  viewStyle,
  textStyle,
  errorMessageStyle,
}: TextFieldDescriptionProps) => {
  const { error, disabled } = useTextFieldContext();
  const themeContext = useTheme();
  const descOverride = themeContext?.theme?.textField?.description;
  const errorOverride = themeContext?.theme?.textField?.errorMessage;

  return (
    <View style={[descriptionStyles.container, viewStyle]}>
      {error ? (
        <View style={descriptionStyles.errorContainer}>
          <MaterialIcons name="error" size={16} color={colors.red[600]} />
          <Typography
            variant={errorOverride?.variant ?? "body-small"}
            tone={errorOverride?.tone ?? "danger"}
            style={errorMessageStyle}
          >
            {errorMessage}
          </Typography>
        </View>
      ) : (
        <Typography
          variant={descOverride?.variant ?? "body-small"}
          tone={descOverride?.tone ?? undefined}
          style={[textStyle, disabled && { color: loopymPallete.fg.disabled }]}
        >
          {children}
        </Typography>
      )}
    </View>
  );
};

const Input = ({
  onFocus,
  onBlur,
  style,
  value,
  placeholderTextColor: placeholderTextColorProps,
  ...rest
}: TextFieldInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const themeContext = useTheme();
  const { error, disabled } = useTextFieldContext();

  const isFilled = !!(value?.length && value.length > 0);

  const overrides = themeContext?.theme?.textField ?? {};

  const placeholderTextColor = disabled
    ? loopymPallete.fg.disabled
    : (placeholderTextColorProps ?? loopymPallete.dark.subtle);

  const mergedBase = { ...inputStyles.base, ...overrides.base };
  const mergedFilled = { ...inputStyles.filled, ...overrides.filled };
  const mergedFocused = { ...inputStyles.focused, ...overrides.focused };
  const mergedError = { ...inputStyles.error, ...overrides.error };
  const mergedDisabled = { ...inputStyles.disabled, ...overrides.disabled };

  return (
    <TextInput
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
      style={[
        { outline: "none" },
        mergedBase,
        isFilled && mergedFilled,
        isFocused && !disabled && mergedFocused,
        error && mergedError,
        disabled && mergedDisabled,
        style,
      ]}
      value={value}
      placeholderTextColor={placeholderTextColor}
      editable={!disabled}
      {...rest}
    />
  );
};

export const TextField = {
  Root,
  Label,
  Description,
  Input,
};
