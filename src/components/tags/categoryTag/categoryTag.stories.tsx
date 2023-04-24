// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { CategoryTag as CategoryTagComponent } from "./categoryTag";

const meta: Meta<typeof CategoryTagComponent> = {
  title: "Tags",
  component: CategoryTagComponent,
};

export default meta;
type Story = StoryObj<typeof CategoryTagComponent>;

export const CategoryTag: Story = {
  args: {
    category: {
      id: 1,
      name: "Action",
    },
  },
};
