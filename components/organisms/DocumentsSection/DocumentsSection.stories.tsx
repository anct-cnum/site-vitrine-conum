import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DocumentsSection from "./DocumentsSection";

const meta = {
  title: "Organisms/DocumentsSection",
  component: DocumentsSection,
} satisfies Meta<typeof DocumentsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
