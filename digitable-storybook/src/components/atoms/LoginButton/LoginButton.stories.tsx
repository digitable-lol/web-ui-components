import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginButton } from "./LoginButton"

export default {
  title: 'Login Button',
  component: LoginButton
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Войти',
  color: 'black',
  backgroundColor: 'green'
};

