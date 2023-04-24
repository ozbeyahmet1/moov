// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Navbar as NavbarComponent } from "./navbar";

const meta: Meta<typeof NavbarComponent> = {
  title: "Layout",
  component: NavbarComponent,
};

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

export const NavBar: Story = {};
