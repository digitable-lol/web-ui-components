import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Mailto, MailtoProps } from './Mailto'

export default {
  title: 'molecules/Mailto',
  component: Mailto
} as ComponentMeta<React.ComponentType<MailtoProps>>

const Template: ComponentStory<React.ComponentType<MailtoProps>> = args => <Mailto {...args} />

export const Primary = Template.bind({})
Primary.args = {}
