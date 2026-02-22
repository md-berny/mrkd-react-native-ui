import type { Meta, StoryObj } from "@storybook/react";
import { Text, View } from "react-native";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
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
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Playground ---
export const Playground: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button text",
  },
};

// --- Variants ---
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="tertiaryDark">Tertiary Dark</Button>
      <Button variant="quarternary">Quarternary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="chat">Chat</Button>
    </View>
  ),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 8, alignItems: "flex-start" }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </View>
  ),
};

// --- With Slots ---
export const WithSlots: Story = {
  render: () => (
    <View style={{ gap: 8, alignItems: "flex-start" }}>
      <Button leftSlot={<Text>←</Text>}>Left slot</Button>
      <Button rightSlot={<Text>→</Text>}>Right slot</Button>
      <Button leftSlot={<Text>←</Text>} rightSlot={<Text>→</Text>}>
        Both slots
      </Button>
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
            <Text
              style={{
                fontSize: 12,
                color: "#888",
                marginBottom: 4,
              }}
            >
              {variant}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size}
                </Button>
              ))}
            </View>
          </View>
        ),
      )}
    </View>
  ),
};
