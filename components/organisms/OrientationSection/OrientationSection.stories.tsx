import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import OrientationSection from "./OrientationSection";

const meta = {
  title: "Organisms/OrientationSection",
  component: OrientationSection,
} satisfies Meta<typeof OrientationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
