import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Container, ContainerProps } from './Container'

export default {
  title: 'atoms/Container',
  component: Container
} as ComponentMeta<React.ComponentType<ContainerProps>>

const Template: ComponentStory<React.ComponentType<ContainerProps>> = args => <Container {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello world'
}
