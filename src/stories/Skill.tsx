import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import './page.css';

import { Skill } from '../definitions/definitions';

export interface SkillProps {
	skills: Skill[];
	skill: string;
	level?: number;
}

const useStyles = makeStyles({
	title: {
		// fontSize: 16,
		// fontWeight: 'bold',
		// whiteSpace: 'normal',
		// maxHeight: 56,
		// overflow: 'hidden',
		// marginBottom: 4,
		// marginTop: 4,
	},
	table: {
		// borderCollapse: 'collapse',
		// backgroundColor: '#f7f7f7',
	},
});

export const SkillPage: React.FC<SkillProps> = (props) => {
	const classes = useStyles();

	const skillItem = props.skills.find((s) => s.id === props.skill);
	if (!skillItem) {
		return <div></div>;
	}
	return (
		<div className={classes.table}>
			<h1>{skillItem.name}</h1>
			<div>{skillItem.description}</div>
			{skillItem.levels.filter((level) => !props.level || level.level === props.level).map((level) => <div>
				<h2>Level: {level.level}</h2>
				<div>{level.description}</div>
				<h3>Examples:</h3>
				{level.examples.map((example) => <div dangerouslySetInnerHTML={{ __html: `- ${ example }` }}></div>)}
			</div>)}
		</div>
	);
};
