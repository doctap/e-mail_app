import React from 'react';
import styles from './Folder.module.scss';

interface IFolder {
	name: string;
	requiredFolder: boolean;
	onClick: (isName: string) => void;
}

export default function Folder(props: IFolder) {

	function getFolderValue(e: React.MouseEvent<HTMLButtonElement>) {
		const elem = e.currentTarget;
		props.onClick(elem.name);
	}

	return (
		<button
			className={styles.folder}
			onClick={getFolderValue}
			name={props.name}
		>
			{props.name}
		</button>
	)
}
