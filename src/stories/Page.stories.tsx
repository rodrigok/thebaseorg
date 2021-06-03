import { Story } from '@storybook/react';
import React from 'react';

import { Page, PageProps } from './Page';
import { skills } from '../data/Skills';
import { disciplines } from '../data/Disciplines';
import { grade } from '../data/Grade';

export default {
	title: 'Example/Page',
	component: Page,
};

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Grade = Template.bind({});
Grade.args = {
	skills,
	disciplines,
	grade,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {

// };
