import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { Story } from '@storybook/react';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

const Template: Story<ButtonProps & {label: string}> = (args) => <Button {...args} >{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	variant: 'contained',
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};
