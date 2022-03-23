import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  title: 'atoms/Text',
  component: Text
} as ComponentMeta<React.ComponentType<TextProps>>

const Template: ComponentStory<React.ComponentType<TextProps>> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = { text: 'Label' }
