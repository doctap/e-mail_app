import React from 'react';
import styles from './FolderManagementButton.module.scss';

interface IFolderManagementButton {
	type: 'button' | 'submit' | 'reset';
	action: 'create' | 'delete' | 'send';
	onClick: (isValue: string) => void;
}

export default function FolderManagementButton(props: IFolderManagementButton) {

	const getAction = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (props.action === 'create' || 'delete' || 'send') props.onClick(props.action);
	}

	return (
		<button
			type={props.type}
			className={styles.folderManagementButton}
			onClick={getAction}
			title={props.action === 'create' ? 'Create folder' : 'Delete folder'}
		>
			{
			
			}
		</button>
	)
}
