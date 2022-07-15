import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading, HeadingProps } from './Heading'

export default {
  title: 'atoms/Heading',
  component: Heading
} as ComponentMeta<React.ComponentType<HeadingProps>>

const Template: ComponentStory<React.ComponentType<HeadingProps>> = args => <Heading {...args} />

export const Primary = Template.bind({})
Primary.args = {}
