import { Story } from '@storybook/react';
import React from 'react';

import { PositionPage, PositionProps } from './Position';
import { skills } from '../data/Skills';
import { gradeRocket } from '../data/Grade';
import { disciplines } from '../data/Disciplines';

export default {
	title: 'Example/Position',
	component: PositionPage,
};

const Template: Story<PositionProps> = (args) => <PositionPage {...args} />;

export const FullPosition = Template.bind({});
FullPosition.args = {
	skills,
	grade: gradeRocket,
	position: '1',
	discipline: 'SE',
	disciplines,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {

// };
