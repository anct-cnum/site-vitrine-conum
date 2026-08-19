import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RessourcesSection from "./RessourcesSection";

const meta = {
  title: "Organisms/RessourcesSection",
  component: RessourcesSection,
} satisfies Meta<typeof RessourcesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
