import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { withRouter } from 'src/hooks/router'

import { Mailto, MailtoProps } from './Mailto'

export default {
  title: 'molecules/Mailto',
  component: Mailto
} as ComponentMeta<React.ComponentType<MailtoProps>>

const Template: ComponentStory<React.ComponentType<MailtoProps>> = args => withRouter(<Mailto {...args} />)

export const Primary = Template.bind({})
Primary.args = {
  mailto: 'support@digitable.ru',
  label: 'support'
}
