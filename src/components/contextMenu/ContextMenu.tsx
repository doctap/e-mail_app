import React from 'react';
import styles from './ContextMenu.module.scss';

interface IContextMenu {
	position: {
		x: number,
		y: number,
	};
	deleteFolder: () => void;
	editNameFolder: () => void;
}

export default function ContextMenu(props: IContextMenu) {
	return (
		<div
			className={styles.custom_context_menu}
			style={{ top: props.position.y, left: props.position.x }}
		>
			<button className={styles.option} onClick={props.deleteFolder}>Delete</button>
			<button className={styles.option} onClick={props.editNameFolder}>Edit name</button>
		</div>
	)
}