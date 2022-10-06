import React, { memo, useCallback, useState } from 'react';
import { folders } from '../../server/Server';
import ContextMenu, { IOptionContextMenu } from '../contextMenu/ContextMenu';
import Folder from '../folder/Folder';
import { IMessage } from '../message/Message';
import styles from './FolderList.module.scss';

interface IMenu {
	folders: IFolder[];
	getCurrentFolderName(name: string): void;
	deleteCurrentFolder(isCurrentName: string): void;
	getCurrentFolderForChange(isCurrentName: string): void;
	showModal(isShow: boolean): void;
}

export interface IFolder {
	name: string;
	requiredFolder: boolean;
	messages: IMessage[];
}

const FolderList = (props: IMenu) => {

	const windowListener = useCallback(() => {
		setIsShownContextMenu(false)
	}, []);
	
	window.addEventListener('click', windowListener)

	const optionsContextMenu: IOptionContextMenu[] = [
		{
			isDropDown: false,
			optionName: 'Delete',
			func: () => props.deleteCurrentFolder(isCurrentName)
		},
		{
			isDropDown: false,
			optionName: 'Edit name',
			func: () => {
				props.getCurrentFolderForChange(isCurrentName)
				props.showModal(true)
			}
		}
	];

	const [isShownContextMenu, setIsShownContextMenu] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isCurrentName, setIsCurrentName] = useState('');

	const callContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		/**Если на выбранной папке поле "requiredFolder: true", то "ContextMenu" вызвано не будет*/
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
					<ContextMenu
						position={position}
						options={optionsContextMenu}
					/>
				)
			}
		</div>
	)
}

export default memo(FolderList);