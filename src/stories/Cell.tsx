import React from 'react';
import { makeStyles } from '@material-ui/styles';

export interface CellProps {
	border?: boolean;
	shadowRight?: boolean;
	shadowBottom?: boolean;
	backgroundColor?: string;
	className?: string;
	colSpan?: number
	verticalAlign?: 'top' | 'middle';
	textAlign?: 'left' | 'center';
}

const useStyles = makeStyles<undefined, CellProps>({
	cell: {
		padding: 12,
		height: 32,
		minWidth: 200,
		position: 'relative',
		color: '#777',
		lineHeight: 1.3,
		'&::after': {
			position: 'absolute',
			content: '""',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			pointerEvents: 'none',
		},
	},
	cellDynamic: (props) => ({
		verticalAlign: props.verticalAlign,
		textAlign: props.textAlign,
		backgroundColor: props.backgroundColor,
		'&::after': {
			border: props.border ? '1px solid #eeeeee' : 'none',
			boxShadow: [props.shadowBottom && '0px 1px rgb(0 0 0 / 25%), 0px 7px rgb(0 0 0 / 4%)', props.shadowRight && '1px 0px rgb(0 0 0 / 25%), 5px 0px rgb(0 0 0 / 3%)'].filter((i) => i).join(),
		},
	}),
});


export const Cell: React.FC<CellProps> = (props) => {
	const classes = useStyles(props);

	return <td colSpan={props.colSpan} className={`${ classes.cell } ${ classes.cellDynamic } ${ props.className }`}>
		{props.children}
	</td>;
};

Cell.defaultProps = {
	border: true,
	shadowRight: false,
	shadowBottom: false,
	verticalAlign: 'top',
	textAlign: 'left',
};
