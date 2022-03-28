import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Image, ImageProps } from './Image'

export default {
  title: 'atoms/Image',
  component: Image
} as ComponentMeta<React.ComponentType<ImageProps>>

const Template: ComponentStory<React.ComponentType<ImageProps>> = args => <Image {...args} />

export const Primary = Template.bind({})
Primary.args = {}
