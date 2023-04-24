// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavBar: Story = {};
