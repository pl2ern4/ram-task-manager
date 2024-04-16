import type { Meta, StoryObj } from '@storybook/react';

import NavigationMenu from '../components/navbar/NavigationMenu';

// const meta: Meta<typeof NavigationMenu> = {
//     title: 'Components/NavigationMenu',
//     component: NavigationMenu,
//   };
      
import { fn } from '@storybook/test';
import { Header } from './Header';

const meta = {
  title: 'Components/Headerr',
  component: NavigationMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
