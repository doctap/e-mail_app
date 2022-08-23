import React, { useCallback, useState } from 'react';
import ContextMenu, { option } from '../contextMenu/ContextMenu';
import Message, { IMessage } from '../message/Message';
import { folders } from '../../server/Server';
import styles from './ListMessages.module.scss';

interface IListMessages {
	messages: IMessage[];
}

export default function ListMessages(props: IListMessages) {

	const [isShowContextMenu, setIsShowContextMenu] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isCurrentId, setIsCurrentId] = useState('');

	const windowListener = useCallback(() => {
		setIsShowContextMenu(false)
	}, []);
	window.addEventListener('click', windowListener);

	const optionsContextMenu: option[] = [
		{
			buttonName: 'Delete',
			func: () => deleteMessage(isCurrentId),
		},
		{
			buttonName: 'Mark message',
			func: () => markMessage(isCurrentId),
		},
	];

	const deleteMessage = (isIdMessage: string) => {
		folders.map(folder => folder.messages.splice(folder.messages.findIndex(message => message.id === isIdMessage), 1))
	};

	const markMessage = (isIdMessage: string) => {
		// folders.map(folder => folder.messages.find(mes => mes.id))
	};

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
		<table className={styles.ListMessages} id='table1'>
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
			{
				isShowContextMenu && (<ContextMenu position={position} options={optionsContextMenu} />)
			}
		</table>
	)
}
