// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Pagination as PaginationComponent } from "./pagination";

const meta: Meta<typeof PaginationComponent> = {
  title: "UI",
  component: PaginationComponent,
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

export const Pagination: Story = {
  args: {
    current_page: 1,
    element_number: 6,
    query: "",
    total_page: 323,
  },
};
