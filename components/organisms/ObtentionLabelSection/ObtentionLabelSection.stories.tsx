import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ObtentionLabelSection from "./ObtentionLabelSection";

const meta = {
  title: "Organisms/ObtentionLabelSection",
  component: ObtentionLabelSection,
} satisfies Meta<typeof ObtentionLabelSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
