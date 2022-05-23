import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'atoms/Button',
  component: Button
} as ComponentMeta<React.ComponentType<ButtonProps>>

const Template: ComponentStory<React.ComponentType<ButtonProps>> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {}
