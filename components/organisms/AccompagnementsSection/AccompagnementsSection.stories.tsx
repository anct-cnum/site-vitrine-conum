import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AccompagnementsSection from "./AccompagnementsSection";

const meta = {
  title: "Organisms/AccompagnementsSection",
  component: AccompagnementsSection,
} satisfies Meta<typeof AccompagnementsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
