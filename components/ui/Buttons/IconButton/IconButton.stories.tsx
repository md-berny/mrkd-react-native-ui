import { Feather } from "@expo/vector-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Text, View } from "react-native";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 8, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "tertiaryDark",
        "quarternary",
        "success",
        "danger",
        "warning",
        "info",
        "outline",
        "chat",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// --- Playground ---
export const Playground: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: <Feather name="star" size={18} color="white" />,
  },
};

// --- Variants ---
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 8, flexDirection: "row", flexWrap: "wrap" }}>
      <IconButton variant="primary">
        <Feather name="star" size={18} color="white" />
      </IconButton>
      <IconButton variant="secondary">
        <Feather name="heart" size={18} color="white" />
      </IconButton>
      <IconButton variant="tertiary">
        <Feather name="settings" size={18} color="white" />
      </IconButton>
      <IconButton variant="tertiaryDark">
        <Feather name="moon" size={18} color="white" />
      </IconButton>
      <IconButton variant="quarternary">
        <Feather name="layers" size={18} color="white" />
      </IconButton>
      <IconButton variant="success">
        <Feather name="check" size={18} color="white" />
      </IconButton>
      <IconButton variant="danger">
        <Feather name="trash-2" size={18} color="white" />
      </IconButton>
      <IconButton variant="warning">
        <Feather name="alert-triangle" size={18} color="white" />
      </IconButton>
      <IconButton variant="info">
        <Feather name="info" size={18} color="white" />
      </IconButton>
      <IconButton variant="outline">
        <Feather name="search" size={18} color="black" />
      </IconButton>
      <IconButton variant="chat">
        <Feather name="send" size={18} color="white" />
      </IconButton>
    </View>
  ),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 8, flexDirection: "row", alignItems: "center" }}>
      <IconButton size="sm">
        <Feather name="star" size={14} color="white" />
      </IconButton>
      <IconButton size="md">
        <Feather name="star" size={18} color="white" />
      </IconButton>
      <IconButton size="lg">
        <Feather name="star" size={22} color="white" />
      </IconButton>
      <IconButton size="xl">
        <Feather name="star" size={26} color="white" />
      </IconButton>
    </View>
  ),
};

// --- Chat variant ---
export const Chat: Story = {
  render: () => (
    <View style={{ gap: 8, flexDirection: "row", alignItems: "center" }}>
      <IconButton variant="chat" size="sm">
        <Feather name="send" size={14} color="white" />
      </IconButton>
      <IconButton variant="chat" size="md">
        <Feather name="send" size={18} color="white" />
      </IconButton>
      <IconButton variant="chat" size="lg">
        <Feather name="send" size={22} color="white" />
      </IconButton>
      <IconButton variant="chat" size="xl">
        <Feather name="send" size={26} color="white" />
      </IconButton>
    </View>
  ),
};

// --- Variants x Sizes grid ---
export const VariantSizeGrid: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {(["primary", "secondary", "outline", "danger"] as const).map(
        (variant) => (
          <View key={variant} style={{ gap: 8 }}>
            <Text style={{ fontSize: 12, color: "#888" }}>{variant}</Text>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              {(["sm", "md", "lg", "xl"] as const).map((size) => (
                <IconButton key={size} variant={variant} size={size}>
                  <Feather
                    name="star"
                    size={
                      size === "sm"
                        ? 14
                        : size === "md"
                          ? 18
                          : size === "lg"
                            ? 22
                            : 26
                    }
                    color={variant === "outline" ? "black" : "white"}
                  />
                </IconButton>
              ))}
            </View>
          </View>
        ),
      )}
    </View>
  ),
};
