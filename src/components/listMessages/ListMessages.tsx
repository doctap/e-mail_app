import React, { useCallback, useState } from 'react';
import { folders } from '../../server/Server';
import ContextMenu, { IOptionContextMenu } from '../contextMenu/ContextMenu';
import { IFolder } from '../folderList/FolderList';
import Message, { IMessage } from '../message/Message';
import styles from './ListMessages.module.scss';

interface IListMessages {
	messages: IMessage[];
	deleteMessage: (idMessage: string) => void;
	markMessage: (idMessage: string) => void;
	replaceMessage: (idMessage: string, folderName: string) => void;
}

export default function ListMessages(props: IListMessages) {

	const [isShowContextMenu, setIsShowContextMenu] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isCurrentId, setIsCurrentId] = useState('');

	const windowListener = useCallback(() => {
		setIsShowContextMenu(false)
	}, []);
	window.addEventListener('click', windowListener);

	const getFolderNames = (arrFolders: IFolder[]) => {
		const result: string[] = [];
		arrFolders.forEach(f => {
			(!['Outgoing', 'Incoming', 'Deleted'].some(n => n === f.name)) && result.push(f.name)
		});
		return result;
	};

	const optionsContextMenu: IOptionContextMenu[] = [
		{
			isDropDown: false,
			optionName: 'Delete',
			func: () => props.deleteMessage(isCurrentId),
		},
		{
			isDropDown: false,
			optionName: 'Mark message',
			func: () => props.markMessage(isCurrentId),
		},
		{
			isDropDown: true,
			optionName: 'Replace to',
			func: (name) => props.replaceMessage(isCurrentId, name ?? ''),
			dropdownOptions: getFolderNames(folders),
		},
	];

	const callContextMenu = (e: React.MouseEvent<HTMLTableRowElement>) => {
		e.preventDefault();
		setIsCurrentId(e.currentTarget.id);

		setIsShowContextMenu(false);
		const newPosition = {
			x: e.pageX,
			y: e.pageY,
		};
		setPosition(newPosition);
		setIsShowContextMenu(true);
	};
	
	return (
		<>
			<table className={styles.ListMessages}>
				<tbody>
					{props.messages.map((item, i) =>
						<Message
							onContextMenu={callContextMenu}
							id={item.id}
							key={i}
							author={item.author}
							message={item.message}
							date={item.date}
							marker={item.marker}
						/>
					)}
				</tbody>
			</table>
			{
				isShowContextMenu && (<ContextMenu position={position} options={optionsContextMenu} />)
			}
		</>
	)
}
