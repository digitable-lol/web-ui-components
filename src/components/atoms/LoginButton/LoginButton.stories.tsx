import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoginButton, LoginButtonProps } from './LoginButton'

export default {
  title: 'atoms/Login Button',
  component: LoginButton
} as ComponentMeta<React.ComponentType<LoginButtonProps>>

const Template: ComponentStory<React.ComponentType<LoginButtonProps>> = args => <LoginButton {...args} />

export const Primary = Template.bind({})
Primary.args = { text: 'Label' }
