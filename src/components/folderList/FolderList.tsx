import React, { useState } from 'react';
import { folders } from '../../server/Server';
import Folder from '../folder/Folder';
import { IMessage } from '../message/Message';
import Modal from '../modalWindows/modal/Modal';
import SetFolderName from '../modalWindows/setFolderName/SetFolderName';
import styles from './FolderList.module.scss';

interface IMenu {
	folders: IFolder[];
	getCurrentFolderName(name: string): void;
	deleteCurrentFolder(name: string): void;
	editCurrentFolder(isCurrentName: string, isEditName: string): void;
}

export interface IFolder {
	name: string;
	requiredFolder: boolean;
	messages: IMessage[];
}

export default function FolderList(props: IMenu) {

	const [isShownContextMenu, setIsShownContextMenu] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isCurrentName, setIsCurrentName] = useState('');
	const [isShowModalWindow, setIsShowModalWindow] = useState(true);

	const callContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		/**проверка на вызов "ContextMenu" над необязательной папкой "requiredFolder"*/
		if (folders.some(it => it.name === e.currentTarget.name && it.requiredFolder === false)) {

			setIsCurrentName(e.currentTarget.name)
			setIsShownContextMenu(false);
			const newPosition = {
				x: e.pageX,
				y: e.pageY,
			}
			setPosition(newPosition)
			setIsShownContextMenu(true)
		}
	};

	const hideContextMenu = () => {
		setIsShownContextMenu(false)
	};

	const deleteCurrentFolder = () => {
		props.deleteCurrentFolder(isCurrentName)
	};

	const editCurrentFolder = (isEditName: string) => {
		props.editCurrentFolder(isCurrentName, isEditName)
	};

	return (
		<div
			onClick={hideContextMenu}
			className={styles.FolderList}
		>
			{props.folders.map(folder =>
				<Folder
					onContextMenu={callContextMenu}
					key={folder.name}
					name={folder.name}
					onClick={props.getCurrentFolderName}
					requiredFolder={folder.requiredFolder}
				/>
			)}

			{
				isShownContextMenu && (
					<div
						className={styles.custom_context_menu}
						style={{ top: position.y, left: position.x }}
					>
						<button className={styles.option} onClick={deleteCurrentFolder}>Delete</button>
						<button className={styles.option} onClick={() => setIsShowModalWindow(true)}>Edit name</button>
					</div>
				)
			}

			{
				isShowModalWindow && (
					// <SetFolderName
					// 	hideWindow={() => setIsShowModalWindow(false)}
					// 	callChangedName={editCurrentFolder}
					// />
					<Modal onClose={() => setIsShowModalWindow(false)}>
						<Folder name='casc' onClick={() => 0} onContextMenu={() => 0} requiredFolder={false} />
					</Modal>
				)
			}
		</div>
	)
}
