import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RecrutementSection from "./RecrutementSection";

const meta = {
  title: "Organisms/RecrutementSection",
  component: RecrutementSection,
} satisfies Meta<typeof RecrutementSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
