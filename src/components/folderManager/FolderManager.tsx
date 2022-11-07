import React from 'react';
import { Button } from 'react-bootstrap';
import FolderList, { IFolder } from '../folderList/FolderList';
import styles from './FolderManager.module.scss';

interface IFolderManager {
	folders: IFolder[];
	getCurrentFolderName(name: string): void;
	deleteFolder(nameFolder: string): void;
	setShowModalWindow(isShow: boolean): void;
	setToggleCreateOrEdit(isShow: boolean): void;
	setIsCurrentName(isCurrentName: string): void;
}

export default function FolderManager(props: IFolderManager) {
	return (
		<>
			<div className={styles.FolderList}>
				<FolderList
					folders={props.folders}
					getCurrentFolderName={props.getCurrentFolderName}
					deleteCurrentFolder={props.deleteFolder}
					getCurrentFolderForChange={currentName => props.setIsCurrentName(currentName)}
					showModal={(isShow) => {
						props.setShowModalWindow(isShow)
						props.setToggleCreateOrEdit(isShow)
					}}
				/>
			</div>
			<div className={styles.FolderManagementButton}>
				<Button
					variant="primary"
					size="sm"
					children='Create Folder'
					onClick={() => {
						props.setShowModalWindow(true)
						props.setToggleCreateOrEdit(false)
					}}
				/>
			</div>
		</>
	)
}
