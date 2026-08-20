import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import OffresFormationSection from "./OffresFormationSection";

const meta = {
  title: "Organisms/OffresFormationSection",
  component: OffresFormationSection,
} satisfies Meta<typeof OffresFormationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
