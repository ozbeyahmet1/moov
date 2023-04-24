// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { CategoryCard as CategoryCardComponent } from "./categoryCard";

const meta: Meta<typeof CategoryCardComponent> = {
  title: "Card",
  component: CategoryCardComponent,
};

export default meta;
type Story = StoryObj<typeof CategoryCardComponent>;

export const CategoryCard: Story = {
  args: {
    category: {
      id: 1,
      name: "Action",
    },
  },
};
