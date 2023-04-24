// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Layout",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterE: Story = {};
