// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent } from "./input";

const meta: Meta<typeof InputComponent> = {
  title: "UI",
  component: InputComponent,
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {};
