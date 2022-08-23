import React, { useState } from 'react';
import styles from './Message.module.scss';

export interface IMessage {
	id: string;
	author: string;
	message: string;
	date: string;
	marker: boolean;
	onContextMenu?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}

export default function Message(props: IMessage) {

	const [classModification, setClassModification] = useState(true);

	const openMessage = (event: React.MouseEvent<HTMLTableRowElement>) => {
		setClassModification(!classModification)
	};

	return (
		<tr
			onContextMenu={props.onContextMenu}
			id={props.id}
			onClick={openMessage}
			className={styles.ItemRow}
		>
			<td className={styles.author}>
				{props.author}
			</td>
			<td className={styles.marker}>
				{props.marker ? 'radio_button_checked' : ' '}
			</td>
			<td className={classModification ? styles.message : `${styles.message} ${styles.message_open}`}>
				{props.message}
			</td>
			<td className={styles.date}>
				{props.date}
			</td>
		</tr>
	)
}