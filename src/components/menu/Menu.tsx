import React, { useState } from 'react';
import { folders } from '../../server/Server';
import FolderList from '../folderList/FolderList';
import FolderManager from '../folderManager/FolderManager';
import Modal from '../modalWindows/modal/Modal';
import styles from './Menu.module.scss';

interface IMenu {
	getCurrentFolderName(name: string): void;
}

export default function Menu(props: IMenu) {

	const [arrFolders, setArrFolder] = useState(folders);

	const addFolder = (isFolderName: string) => {
		if (isFolderName)
			folders.push({
				name: isFolderName,
				requiredFolder: false,
				messages: [
					{
						author: 'Norman Morales',
						message: 'Hey bitch, nice hairs😁',
						date: '234',
					},
				]
			});
		const result = folders.slice();
		setArrFolder(result);
	};

	const deleteFolder = (nameFolder: string) => {
		folders.forEach((folder, inx, folders) => {
			if (folder.name === nameFolder && folder.requiredFolder === false) folders.splice(inx, 1)
		});
		const result = folders.slice();
		setArrFolder(result);
	};

	//======== Редактировать имя папки =======
	const editFolderName = (isCurrentName: string, isEditName: string) => {
		folders.forEach(folder => {
			if (folder.name === isCurrentName && folder.requiredFolder === false) folder.name = isEditName
		});
		const result = folders.slice();
		setArrFolder(result);
	};

	return (
		<div>
			<div className={styles.FolderList}>
				<FolderList
					folders={arrFolders}
					getCurrentFolderName={props.getCurrentFolderName}
					deleteCurrentFolder={deleteFolder}
					editCurrentFolder={editFolderName}
				/>
			</div>
			<div className={styles.FolderManagementButton}>
				<FolderManager sendFolderName={addFolder} />
			</div>
			
		</div>
	)
}
