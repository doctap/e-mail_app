import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { folders } from '../../server/Server';
import FolderList from '../folderList/FolderList';
import Modal from '../modalWindows/modalBackGround/ModalBackGround';
import ModalWindow from '../modalWindows/modalWindow/ModalWindow';
import uniqId from 'uniqid';
import styles from './Menu.module.scss';

interface IMenu {
	getCurrentFolderName(name: string): void;
}

export default function Menu(props: IMenu) {

	const [arrFolders, setArrFolder] = useState(folders);
	const [showModalWindow, setShowModalWindow] = useState(false);
	const [toggleCreateOrEdit, setToggleCreateOrEdit] = useState(false);
	const [isCurrentName, setIsCurrentName] = useState('');

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
						id: uniqId(),
						marker: false,
					},
				]
			});
		const result = folders.slice();
		setArrFolder(result);
		setShowModalWindow(false);
	};

	const deleteFolder = (nameFolder: string) => {
		folders.forEach((folder, inx, folders) => {
			if (folder.name === nameFolder) folders.splice(inx, 1)
		});
		const result = folders.slice();
		setArrFolder(result);
	};

	const editFolderName = (isEditName: string) => {
		if (isEditName) {
			folders.forEach(folder => {
				if (folder.name === isCurrentName) folder.name = isEditName
			});
			const result = folders.slice();
			setArrFolder(result);
			setShowModalWindow(false);
		}
	};

	return (
		<>
			<div className={styles.FolderList}>
				<FolderList
					folders={arrFolders}
					getCurrentFolderName={props.getCurrentFolderName}
					deleteCurrentFolder={deleteFolder}
					getCurrentFolderForChange={currentName => setIsCurrentName(currentName)}
					showModal={(isShow) => {
						setShowModalWindow(isShow)
						setToggleCreateOrEdit(isShow)
					}}
				/>
			</div>
			<div className={styles.FolderManagementButton}>
				<Button
					variant="primary"
					size="sm"
					children='Create Folder'
					onClick={() => {
						setShowModalWindow(true)
						setToggleCreateOrEdit(false)
					}}
				/>
			</div>

			{
				showModalWindow && (
					<Modal onClose={() => setShowModalWindow(false)}>
						{
							toggleCreateOrEdit
								?
								<ModalWindow
									label="What's the new name?"
									buttonName='Edit'
									getData={editFolderName}
								/>
								:
								<ModalWindow
									label="Create folder"
									buttonName='Create'
									getData={addFolder}
								/>
						}
					</Modal>
				)
			}
		</>
	)
}
