import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input, InputProps } from './Input'

export default {
  title: 'atoms/Input',
  component: Input
} as ComponentMeta<React.ComponentType<InputProps<object>>>

const Template: ComponentStory<React.ComponentType<InputProps<object>>> = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {}
