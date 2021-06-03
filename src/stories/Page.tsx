import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './page.css';

import { Bullets } from './Bullet';
import { Skill, Position, Discipline, Grade } from '../definitions/definitions';
import { Cell, CellProps } from './Cell';

export interface PageProps {
	skills: Skill[];
	disciplines: Discipline[];
	grade: Grade;
}

const useStyles = makeStyles({
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		whiteSpace: 'normal',
		maxHeight: 56,
		overflow: 'hidden',
		marginBottom: 4,
		marginTop: 4,
	},
	initials: {
		fontSize: 14,
	},
	empty: {
		color: '#aaa',
	},
	categoryCell: {
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold',
	},
	categoryDetail: {
		color: '#fff',
		fontWeight: 'normal',
		lineHeight: '21px',
	},
	addRowCell: {
		height: 42,
	},
	button: {
		fontWeight: 600,
		color: '#33995e',
	},
	stickTop: {
		position: 'sticky',
		top: 0,
		zIndex: 1,
	},
	stickTopLeft: {
		position: 'sticky',
		top: 0,
		left: 0,
		zIndex: 2,
	},
	stickLeft: {
		position: 'sticky',
		left: 0,
		zIndex: 1,
	},
	stickTop2: {
		top: 50,
	},
	table: {
		borderCollapse: 'collapse',
		backgroundColor: '#f7f7f7',
	},
});

const CellWhite: React.FC<CellProps> = (props) => <Cell backgroundColor='#fff' {...props}>{props.children}</Cell>;
const CellCategory: React.FC<CellProps> = (props) => <Cell backgroundColor='#40bf75' {...props}>{props.children}</Cell>;

export const Page: React.FC<PageProps> = (props) => {
	const classes = useStyles();

	const rows = [];
	let cells;

	const headerBox = <div className={classes.title}>Positions -&gt;</div>;

	const positionBox = (position: Position, discipline: Discipline) => {
		const count = props.grade.categories.reduce((count, category) => count + Object.values(category.skills).filter((p) => position.id in p).length, 0);
		return <>
			<div className={classes.initials}>
				{discipline.initials + position.level}
			</div>
			<div className={classes.title}>
				{position.name}
			</div>
			<div>
				{count} {count === 1 ? 'skill' : 'skills'}
			</div>
			<div>
				"users"
			</div>
		</>;
	};

	// Render disciplines
	cells = [<CellWhite shadowRight className={`${ classes.stickTopLeft }`}>
		{headerBox}
	</CellWhite>];

	props.disciplines.forEach((discipline) => {
		cells.push(<CellWhite colSpan={discipline.positions.length} className={`${ classes.stickTop }`}>
			<div className={classes.title}>
				{discipline.name}
			</div>
		</CellWhite>);
	});
	cells.push(<CellWhite verticalAlign='middle' textAlign='center' className={`${ classes.stickTop } ${ classes.button }`}>
		+ Add a discipline
	</CellWhite>);

	rows.push(<tr>{cells}</tr>);


	// Render positions
	cells = [<CellWhite shadowBottom shadowRight className={`${ classes.stickTopLeft } ${ classes.stickTop2 }`}>
		{headerBox}
	</CellWhite>];

	let positionCount = 0;
	props.disciplines.forEach((discipline) => {
		discipline.positions.forEach((position) => {
			positionCount++;
			cells.push(<CellWhite shadowBottom className={`${ classes.stickTop } ${ classes.stickTop2 }`}>
				{positionBox(position, discipline)}
			</CellWhite>);
		});
	});

	rows.push(<tr>{cells}</tr>);


	// Render skills
	props.grade.categories.forEach((category) => {
		const skillCount = Object.keys(category.skills).length;
		rows.push(
			<tr>
				<CellCategory border={false} shadowRight className={`${ classes.categoryCell } ${ classes.stickLeft }`}>
					{ category.name }
					<div className={classes.categoryDetail}>
						{ skillCount } { skillCount === 1 ? 'skill' : 'skills' }
					</div>
				</CellCategory>
				<CellCategory border={false} colSpan={positionCount} className={classes.categoryCell}></CellCategory>
			</tr>,
		);


		for (const [id, levels] of Object.entries(category.skills)) {
			const cells = [];
			const sk = props.skills.find((s) => s.id === id);
			if (!sk) {
				continue;
			}
			cells.push(<CellWhite shadowRight className={`${ classes.stickLeft }`}>
				<div className={classes.title}>
					{sk.name}
				</div>
				{sk.description.length > 140 ? `${ sk.description.substr(0, 137) }${ '...' }` : sk.description }
			</CellWhite>);

			props.disciplines.forEach((discipline) => {
				discipline.positions.forEach((position) => {
					const lv = sk.levels.find((l) => l.level === levels[position.id]);
					if (lv) {
						cells.push(<CellWhite>
							<Bullets count={lv.level} total={levels.length}></Bullets>
							{lv.description.length > 140 ? `${ lv.description.substr(0, 137) }${ '...' }` : lv.description }
						</CellWhite>);
					} else {
						cells.push(<Cell verticalAlign='middle' textAlign='center'>
							<div className={classes.empty}>
								Add requirement<br/>
								+
							</div>
						</Cell>);
					}
				});
			});
			rows.push(<tr>{cells}</tr>);
		}

		rows.push(
			<tr>
				<CellWhite border={false} verticalAlign='middle' textAlign='center' shadowRight className={`${ classes.addRowCell } ${ classes.stickLeft } ${ classes.button }`}>
					+ Add skills to category
				</CellWhite>
				<CellWhite border={false} colSpan={positionCount} className={classes.addRowCell}></CellWhite>
			</tr>,
			<tr>
				<Cell border={false} shadowRight className={classes.stickLeft}></Cell>
				<Cell border={false} colSpan={positionCount}></Cell>
			</tr>,
		);
	});

	return (
		<table className={classes.table}>
			{rows}
		</table>
	);
};
