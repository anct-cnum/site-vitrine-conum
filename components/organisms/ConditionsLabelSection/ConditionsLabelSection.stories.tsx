import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ConditionsLabelSection from "./ConditionsLabelSection";

const meta = {
  title: "Organisms/ConditionsLabelSection",
  component: ConditionsLabelSection,
} satisfies Meta<typeof ConditionsLabelSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
