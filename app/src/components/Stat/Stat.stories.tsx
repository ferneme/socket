import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Stat } from './Stat';

const meta: Meta = {
  title: 'Stat',
  component: Stat,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const StatPrimary: Story = {
  args: {
    background: 'primary',
    align: 'horizontal',
    stats: [
      { title: 'Order', value: '45fe', description: 'CHingo Restaurant' },
    ],
  },
};

export const StatSecondary: Story = {
  args: {
    ...StatPrimary.args,
    background: 'secondary',
  },
};

export const Stats: Story = {
  args: {
    ...StatSecondary.args,
    stats: [
      { title: 'Restaurant', value: 'Chingu' },
      { title: 'Table', value: '20' },
      { title: 'Order', value: 'ej58' },
    ],
  },
};

export const StatsVertical: Story = {
  args: {
    ...StatSecondary.args,
    align: 'vertical',
    stats: [
      { title: 'Restaurant', value: 'Chingu' },
      { title: 'Table', value: '20' },
      { title: 'Order', value: 'ej58' },
    ],
  },
};
export const StatsStyling: Story = {
  args: {
    ...StatSecondary.args,
    background: 'none',
    stats: [
      {
        figure: (
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
        ),
        title: 'Restaurant',
        value: 'Chingu',
        description: '...one of the most popular in London!',
        titleColor: 'secondary',
        titleSize: 'lg',
        descriptionColor: 'primary',
      },
      {
        figure: (
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </div>
          </div>
        ),
        title: 'Table',
        value: '20',
        description: 'VIP table',
        descriptionSize: 'md',
        descriptionColor: 'secondary',
      },
      {
        title: 'Order',
        value: 'ej58',
        actions: (
          <Button
            title="help"
            color="info"
            size="sm"
            onClick={() => console.log('you clicked me')}
          />
        ),
      },
    ],
  },
};
