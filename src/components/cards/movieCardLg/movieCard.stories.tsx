// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { CardSize } from "../../../interfaces/movieCard";
import { MovieCard as MovieCardComponent } from "./movieCard";

const meta: Meta<typeof MovieCardComponent> = {
  title: "Card",
  component: MovieCardComponent,
};

export default meta;
type Story = StoryObj<typeof MovieCardComponent>;

export const MovieCard: Story = {
  render: () => (
    <MovieCardComponent
      index={1}
      movie={{
        id: 1,
        title: "Dexter",
        poster_path: "vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      }}
      size={CardSize.LG}
    />
  ),
};
