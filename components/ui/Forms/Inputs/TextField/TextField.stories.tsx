import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { View } from "react-native";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField.Root> = {
  title: "UI/TextField",
  component: TextField.Root,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField.Root>;

// ---------------------------------------------------------------------------
// Playground
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    error: false,
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <TextField.Root {...args}>
        <TextField.Label required>Email</TextField.Label>
        <TextField.Input
          value={value}
          onChangeText={setValue}
          placeholder="Enter your email"
        />
        <TextField.Description errorMessage="Please enter a valid email address">
          We'll never share your email.
        </TextField.Description>
      </TextField.Root>
    );
  },
};

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField.Root>
        <TextField.Label>Label</TextField.Label>
        <TextField.Input
          value={value}
          onChangeText={setValue}
          placeholder="Placeholder"
        />
        <TextField.Description>Helper text goes here</TextField.Description>
      </TextField.Root>
    );
  },
};

export const Filled: Story = {
  render: () => (
    <TextField.Root>
      <TextField.Label>Label</TextField.Label>
      <TextField.Input value="Filled value" placeholder="Placeholder" />
      <TextField.Description>Helper text goes here</TextField.Description>
    </TextField.Root>
  ),
};

export const WithError: Story = {
  render: () => (
    <TextField.Root error>
      <TextField.Label required>Email</TextField.Label>
      <TextField.Input value="notanemail" placeholder="Enter your email" />
      <TextField.Description errorMessage="Please enter a valid email address">
        We'll never share your email.
      </TextField.Description>
    </TextField.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextField.Root disabled>
      <TextField.Label>Label</TextField.Label>
      <TextField.Input
        value="Disabled value"
        placeholder="Placeholder"
        editable={false}
      />
      <TextField.Description>This field is disabled</TextField.Description>
    </TextField.Root>
  ),
};

// ---------------------------------------------------------------------------
// Label variations
// ---------------------------------------------------------------------------

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField.Root>
        <TextField.Label required>Required field</TextField.Label>
        <TextField.Input
          value={value}
          onChangeText={setValue}
          placeholder="This field is required"
        />
      </TextField.Root>
    );
  },
};

export const NoLabel: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField.Root>
        <TextField.Input
          value={value}
          onChangeText={setValue}
          placeholder="Search..."
        />
      </TextField.Root>
    );
  },
};

export const NoDescription: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <TextField.Root>
        <TextField.Label>Label</TextField.Label>
        <TextField.Input
          value={value}
          onChangeText={setValue}
          placeholder="No description"
        />
      </TextField.Root>
    );
  },
};

// ---------------------------------------------------------------------------
// All states
// ---------------------------------------------------------------------------

export const AllStates: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <View style={{ gap: 24 }}>
        {/* Default */}
        <TextField.Root>
          <TextField.Label>Default</TextField.Label>
          <TextField.Input
            value={value}
            onChangeText={setValue}
            placeholder="Placeholder"
          />
          <TextField.Description>Helper text</TextField.Description>
        </TextField.Root>

        {/* Filled */}
        <TextField.Root>
          <TextField.Label>Filled</TextField.Label>
          <TextField.Input value="Filled value" placeholder="Placeholder" />
          <TextField.Description>Helper text</TextField.Description>
        </TextField.Root>

        {/* Error */}
        <TextField.Root error>
          <TextField.Label required>Error</TextField.Label>
          <TextField.Input value="Bad value" placeholder="Placeholder" />
          <TextField.Description errorMessage="This field has an error">
            Helper text
          </TextField.Description>
        </TextField.Root>

        {/* Disabled */}
        <TextField.Root disabled>
          <TextField.Label>Disabled</TextField.Label>
          <TextField.Input
            value="Disabled value"
            placeholder="Placeholder"
            editable={false}
          />
          <TextField.Description>Helper text</TextField.Description>
        </TextField.Root>
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Subcomponents standalone
// ---------------------------------------------------------------------------

export const Subcomponents: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <View style={{ gap: 12 }}>
        {/* Label only */}
        <TextField.Root>
          <TextField.Label required>Standalone label</TextField.Label>
          <TextField.Input
            value={value}
            onChangeText={setValue}
            placeholder="..."
          />
        </TextField.Root>

        {/* Description only */}
        <TextField.Root>
          <TextField.Input
            value={value}
            onChangeText={setValue}
            placeholder="..."
          />
          <TextField.Description>Standalone description</TextField.Description>
        </TextField.Root>

        {/* Error description only */}
        <TextField.Root error>
          <TextField.Input
            value={value}
            onChangeText={setValue}
            placeholder="..."
          />
          <TextField.Description errorMessage="Standalone error message" />
        </TextField.Root>
      </View>
    );
  },
};
