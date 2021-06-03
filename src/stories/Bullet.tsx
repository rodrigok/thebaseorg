import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export interface BulletProps {
	count: number;
	total: number;
}

const useStyles = makeStyles({
	bullets: {
		display: 'flex',
		marginBottom: 8,
	},
	bullet: {
		height: 8,
		width: 8,
		marginRight: 4,
		marginTop: 2,
		marginBottom: 2,
		backgroundColor: '#eee',
		borderRadius: 10,
	},
	bulletFilled: {
		backgroundColor: '#33995e',
	},
});


export const Bullets: React.FC<BulletProps> = (props) => {
	const classes = useStyles();

	const items = [];
	for (let i = 0; i < props.total; i++) {
		items.push(
			<div className={`${ classes.bullet } ${ i < props.count && classes.bulletFilled }`}></div>,
		);
	}
	return <div className={classes.bullets}>{items}</div>;
};

Bullets.defaultProps = {
	count: 0,
	total: 5,
};
