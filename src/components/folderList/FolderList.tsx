import React, { useState } from 'react';
import Folder from '../folder/Folder';
import { IMessage } from '../message/Message';
import styles from './FolderList.module.scss';

interface IMenu {
	folders: IFolder[];
	getCurrentFolderName(name: string): void;
	deleteCurrentFolder(name: string): void;
	editCurrentFolder(name: string): void;
}

export interface IFolder {
	name: string;
	requiredFolder: boolean;
	messages: IMessage[];
}

export default function FolderList(props: IMenu) {

	const [isShown, setIsShown] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [nameFolder, setNameFolder] = useState('');

	const showContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		setNameFolder(e.currentTarget.name)

		setIsShown(false);
		const newPosition = {
			x: e.pageX,
			y: e.pageY,
		}

		setPosition(newPosition)
		setIsShown(true)
	};

	const hideContextMenu = () => {
		setIsShown(false)
	};

	const deleteCurrentFolder = () => {
		props.deleteCurrentFolder(nameFolder)
	};

	const editCurrentFolder = () => {
		//Редактировать Имя Папки
		props.editCurrentFolder(nameFolder)
		console.log('edit')
	};

	return (
		<div
			onClick={hideContextMenu}
			className={styles.FolderList}
		>
			{props.folders.map(folder =>
				<Folder
					onContextMenu={showContextMenu}
					key={folder.name}
					name={folder.name}
					onClick={props.getCurrentFolderName}
					requiredFolder={folder.requiredFolder}
				/>
			)}

			{
				isShown && (
					<div
						className={styles.custom_context_menu}
						style={{ top: position.y, left: position.x }}
					>
						<button className={styles.option} onClick={deleteCurrentFolder}>Delete</button>
						<button className={styles.option} onClick={editCurrentFolder}>Edit name</button>
					</div>
				)
			}
		</div>
	)
}
