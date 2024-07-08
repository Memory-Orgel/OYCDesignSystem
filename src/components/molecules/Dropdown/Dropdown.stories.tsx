import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Palette } from '../../../themes/lightTheme';

const meta = {
  title: 'UI/Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Dropdown.Item>1번</Dropdown.Item>
        <Dropdown.Item>2번</Dropdown.Item>
      </>
    ),
    size: 'md',
    variant: 'outlined',
    color: 'primary',
    disabled: false,
  },
};

const colorList: Palette[] = ['primary', 'secondary', 'success', 'danger'];
