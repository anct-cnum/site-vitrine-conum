import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import EnTete from "./EnTete";

const meta = {
  title: "Organisms/EnTete",
  component: EnTete,
  tags: ["autodocs"],
} satisfies Meta<typeof EnTete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};
