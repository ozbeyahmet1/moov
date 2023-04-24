// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from "./footer";

const meta: Meta<typeof FooterComponent> = {
  title: "Layouts",
  component: FooterComponent,
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};
