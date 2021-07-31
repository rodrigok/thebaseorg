import { Story } from '@storybook/react';
import React from 'react';

import { Page, PageProps } from './Page';
import { skills } from '../data/Skills';
import { disciplines, disciplinesRocket } from '../data/Disciplines';
import { grade, gradeRocket } from '../data/Grade';

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
	expertise: ['backend'],
};

export const GradeRocket = Template.bind({});
GradeRocket.args = {
	skills,
	disciplines: disciplinesRocket,
	grade: gradeRocket,
	// expertise: ['Frontend', 'Frontend (Web)'],
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {

// };
