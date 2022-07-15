import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Form, FormProps } from './Form'

export default {
  title: 'atoms/Form',
  component: Form
} as ComponentMeta<React.ComponentType<FormProps>>

const Template: ComponentStory<React.ComponentType<FormProps>> = args => <Form {...args} />

export const Primary = Template.bind({})
Primary.args = {}
