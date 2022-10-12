import React from 'react';
import styles from './Folder.module.scss';

interface IFolderButton {
	name: string;
	requiredFolder: boolean;
	onClick: (isName: string) => void;
	onContextMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isSelected: boolean;
}

export default function Folder(props: IFolderButton) {

	function getFolderName(e: React.MouseEvent<HTMLButtonElement>) {
		const elem = e.currentTarget;
		props.onClick(elem.name);
	}

	return (
		<button
			onContextMenu={props.onContextMenu}
			className={props.isSelected ? `${styles.folder} ${styles.folder_selected}` : `${styles.folder}`}
			onClick={getFolderName}
			name={props.name}
		>
			{props.name}
		</button>
	)
}
