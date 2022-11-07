import React, { useState } from 'react';
import { IFolder } from '../folderList/FolderList';
import ModalWindow from '../modalWindows/modalWindow/ModalWindow';
import uniqId from 'uniqid';
import styles from './Menu.module.scss';
import ModalBackGround from '../modalWindows/modalBackGround/ModalBackGround';
import FolderManager from '../folderManager/FolderManager';

interface IMenu {
	folders: IFolder[];
	getCurrentFolderName(name: string): void;
}

const Menu = (props: IMenu) => {

	const [arrFolders, setArrFolder] = useState(props.folders);
	const [showModalWindow, setShowModalWindow] = useState(false);
	const [toggleCreateOrEdit, setToggleCreateOrEdit] = useState(false);
	const [isCurrentName, setIsCurrentName] = useState('');

	const addFolder = (isFolderName: string) => {
		if (isFolderName)
			props.folders.push({
				name: isFolderName,
				requiredFolder: false,
				isSelected: false,
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
		const result = props.folders.slice();
		setArrFolder(result);
		setShowModalWindow(false);
	}

	const editFolderName = (isEditName: string) => {
		if (isEditName) {
			props.folders.forEach(folder => {
				if (folder.name === isCurrentName) folder.name = isEditName
			});
			const result = props.folders.slice();
			setArrFolder(result);
			setShowModalWindow(false);
		}
	}

	const deleteFolder = (nameFolder: string) => {
		props.folders.forEach((folder, inx, folders) => {
			if (folder.name === nameFolder) folders.splice(inx, 1)
		});
		const result = props.folders.slice();
		setArrFolder(result);
	}

	return (
		<>
			<FolderManager
				deleteFolder={deleteFolder}
				folders={arrFolders}
				getCurrentFolderName={props.getCurrentFolderName}
				setIsCurrentName={setIsCurrentName}
				setShowModalWindow={setShowModalWindow}
				setToggleCreateOrEdit={setToggleCreateOrEdit}
			/>
			{
				<ModalBackGround isShowModalBackGround={showModalWindow} onClose={() => setShowModalWindow(false)}>
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
				</ModalBackGround>
			}
		</>
	)
}

export default Menu;