// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { MovieCard as MovieCardComponent } from "./movieCard";

const meta: Meta<typeof MovieCardComponent> = {
  title: "Cards",
  component: MovieCardComponent,
};

export default meta;
type Story = StoryObj<typeof MovieCardComponent>;

export const MovieCard: Story = {
  args: {
    index: 1,
    movie: {
      id: 1,
      poster_path: "vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      title: "John Wick",
    },
    size: 1,
  },
};
