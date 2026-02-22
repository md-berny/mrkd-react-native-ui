import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 8 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "title-screen",
        "title-section",
        "title-subsection",
        "title-body",
        "title-group",
        "body-large",
        "body-large-bold",
        "body-large-semibold",
        "body-default",
        "body-default-bold",
        "body-small",
        "body-small-bold",
        "label-title",
        "label-description",
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
    tone: {
      control: "select",
      options: [
        "light",
        "heading",
        "body",
        "body-subtle",
        "brand",
        "success",
        "danger",
        "warning",
        "info",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// --- Playground ---
export const Playground: Story = {
  args: {
    variant: "body-default",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

// --- Variants ---
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Typography variant="display">Display</Typography>
      <Typography variant="title-screen">Title Screen</Typography>
      <Typography variant="title-section">Title Section</Typography>
      <Typography variant="title-subsection">Title Subsection</Typography>
      <Typography variant="title-body">Title Body</Typography>
      <Typography variant="title-group">Title Group</Typography>
      <Typography variant="body-large">Body Large</Typography>
      <Typography variant="body-large-bold">Body Large Bold</Typography>
      <Typography variant="body-large-semibold">Body Large Semibold</Typography>
      <Typography variant="body-default">Body Default</Typography>
      <Typography variant="body-default-bold">Body Default Bold</Typography>
      <Typography variant="body-small">Body Small</Typography>
      <Typography variant="body-small-bold">Body Small Bold</Typography>
      <Typography variant="label-title">Label Title</Typography>
      <Typography variant="label-description">Label Description</Typography>
      <Typography variant="lead">Lead</Typography>
      <Typography variant="large">Large</Typography>
      <Typography variant="small">Small</Typography>
      <Typography variant="muted">Muted</Typography>
    </View>
  ),
};

// --- Semantic ---
export const SemanticVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="p">Paragraph</Typography>
    </View>
  ),
};

// --- Tones ---
export const Tones: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Typography variant="body-default" tone="heading">
        Heading tone
      </Typography>
      <Typography variant="body-default" tone="body">
        Body tone
      </Typography>
      <Typography variant="body-default" tone="body-subtle">
        Body subtle tone
      </Typography>
      <Typography variant="body-default" tone="brand">
        Brand tone
      </Typography>
      <Typography variant="body-default" tone="success">
        Success tone
      </Typography>
      <Typography variant="body-default" tone="danger">
        Danger tone
      </Typography>
      <Typography variant="body-default" tone="warning">
        Warning tone
      </Typography>
      <Typography variant="body-default" tone="info">
        Info tone
      </Typography>
      <View style={{ backgroundColor: "#000", padding: 8, borderRadius: 8 }}>
        <Typography variant="body-default" tone="light">
          Light tone
        </Typography>
      </View>
    </View>
  ),
};
