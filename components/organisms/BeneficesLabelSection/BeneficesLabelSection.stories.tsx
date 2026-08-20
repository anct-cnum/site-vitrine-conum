import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BeneficesLabelSection from "./BeneficesLabelSection";

const meta = {
  title: "Organisms/BeneficesLabelSection",
  component: BeneficesLabelSection,
} satisfies Meta<typeof BeneficesLabelSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
