// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Logo as LogoComponent } from './logo';

const meta: Meta<typeof LogoComponent> = {
  title: 'Layout',
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {
  render: () => <LogoComponent />,
};
