import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ColorTexts, ColorTextsProps } from './ColorTexts'

export default {
  title: 'atoms/ColorTexts',
  component: ColorTexts
} as ComponentMeta<React.ComponentType<ColorTextsProps>>

const Template: ComponentStory<React.ComponentType<ColorTextsProps>> = args => <ColorTexts {...args} />

export const Primary = Template.bind({})
Primary.args = {}
