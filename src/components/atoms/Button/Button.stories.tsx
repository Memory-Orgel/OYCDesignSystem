import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Palette } from '../../../themes/lightTheme';

const meta = {
  title: 'DDS/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['!autodocs'],
  argTypes: {
    children: {
      description: '내용',
    },
    size: {
      description: '크기',
    },
    variant: {
      description: '버튼 스타일',
    },
    color: {
      description: '적용할 컬러 팔레트',
    },
    disabled: {
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const colorList: Palette[] = ['primary', 'secondary'];

export const Contained: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'contained',
    color: 'primary',
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colorList.map((color) => (
        <Button {...args} color={color} variant="contained" />
      ))}
    </div>
  ),
};

export const Outlined: Story = {
  args: {
    ...Contained.args,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colorList.map((color) => (
        <Button {...args} color={color} variant="outlined" />
      ))}
    </div>
  ),
};

export const Primary: Story = {
  args: {
    ...Contained.args,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
};
