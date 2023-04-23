// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { MovieCard } from './movieCardLg';

const meta: Meta<typeof MovieCard> = {
  title: 'Card',
  component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const MovieCardLG: Story = {
  render: () => (
    <MovieCard
      index={1}
      movie={{
        id: 1,
        title: 'Dexter',
        poster_path:
          'https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_FMjpg_UX1000_.jpg',
      }}
    />
  ),
};
