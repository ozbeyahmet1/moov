// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { CategoryCard as CategoryCardTemplate } from "./categoryCard";

const meta: Meta<typeof CategoryCardTemplate> = {
  title: "Card",
  component: CategoryCardTemplate,
};

export default meta;
type Story = StoryObj<typeof CategoryCardTemplate>;

export const CategoryCard: Story = {
  render: () => <CategoryCardTemplate category={{ id: 1, name: "Action" }} key={1} />,
};
