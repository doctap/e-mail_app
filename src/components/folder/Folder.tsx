import React from 'react';
import styles from './Folder.module.scss';

interface IFolder {
	name: string;
	requiredFolder: boolean;
	onClick: (isName: string) => void;
	onContextMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Folder(props: IFolder) {

	function getFolderName(e: React.MouseEvent<HTMLButtonElement>) {
		const elem = e.currentTarget;
		props.onClick(elem.name);
	}

	return (
		<button
			onContextMenu={props.onContextMenu}
			className={styles.folder}
			onClick={getFolderName}
			name={props.name}
		>
			{props.name}
		</button>
	)
}
