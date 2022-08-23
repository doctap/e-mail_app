import React from 'react';
import styles from './ContextMenu.module.scss';

export interface option {
	buttonName: string;
	func: () => void;
};

interface IContextMenu {
	position: {
		x: number,
		y: number,
	};
	options: option[];
}

export default function ContextMenu(props: IContextMenu) {
	return (
		<div
			className={styles.custom_context_menu}
			style={{ top: props.position.y, left: props.position.x }}
		>
			{
				props.options.map(option => <button className={styles.option} children={option.buttonName} onClick={option.func} key={option.buttonName} />)
			}
		</div>
	)
}