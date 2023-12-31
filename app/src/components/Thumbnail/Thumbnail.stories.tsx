import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from './Thumbnail';

const meta: Meta<typeof Thumbnail> = {
  title: 'Datadisplay/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const ThumbnailRounded: Story = {
  args: {
    alt: 'Pepperoni',
    src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
};
