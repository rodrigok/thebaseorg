import { Story } from '@storybook/react';
import React from 'react';

import { SkillPage, SkillProps } from './Skill';
import { skills } from '../data/Skills';

export default {
	title: 'Example/Skill',
	component: SkillPage,
};

const Template: Story<SkillProps> = (args) => <SkillPage {...args} />;

export const FullSkil = Template.bind({});
FullSkil.args = {
	skills,
	skill: '1',
	level: 1,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {

// };
