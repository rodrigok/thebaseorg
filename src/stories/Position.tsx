import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { Discipline, Grade, Skill } from '../definitions/definitions';

export interface PositionProps {
	skills: Skill[];
	grade: Grade;
	position: string;
	discipline: string;
	disciplines: Discipline[];
}

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
			<Box fontSize='h6.fontSize' fontWeight='500' pb={1} pt={4}>{skillItem.name}</Box>
			{/* <Box fontSize='fontSize'>{skillItem.description}</Box> */}
			{skillItem.levels.filter((level) => !props.level || level.level === props.level).map((level) => <div>
				{/* <h2>Level: {level.level}</h2> */}
				<Box fontSize='fontSize'>{level.description}</Box>
				{/* <h3>Examples:</h3> */}
				{/* {level.examples.map((example) => <div dangerouslySetInnerHTML={{ __html: `- ${ example }` }}></div>)} */}
			</div>)}
		</div>
	);
};

export const CategorySection: React.FC<{position: string; category: Grade['categories'][0]; skills: Skill[]}> = (props) => {
	// const classes = useStyles();
	console.log(1);

	const entries = Object.entries(props.category.skills).filter(([, { positions }]) => positions[props.position]).map(([skillId, { positions }]) => <SkillPage skills={props.skills} skill={skillId} level={positions[props.position]}></SkillPage>);

	if (!entries.length) {
		return <></>;
	}

	return <>
		<Box fontSize='h5.fontSize' pb={0} pt={6} fontWeight='600'>{props.category.name}</Box>
		{entries}
	</>;
};

export const PositionPage: React.FC<PositionProps> = (props) => {
	const entries = props.grade.categories.map((category) => <CategorySection skills={props.skills} position={props.position} category={category}></CategorySection>);

	const discipline = props.disciplines.find((d) => d.initials === props.discipline);
	const position = discipline?.positions.find((p) => p.id === props.position);
	return <>
		<Box fontSize='h4.fontSize' pb={0} pt={0} fontWeight='600'>{position?.name}</Box>

		{entries}
	</>;
};
