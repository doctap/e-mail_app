import React, { useState } from 'react';
import styles from './Message.module.scss';

export interface IMessage {
	author: string;
	message: string;
	date: string;
}

export default function Message(props: IMessage) {

	const [classModification, setClassModification] = useState(true);

	const openMessage = () => {
		setClassModification(!classModification)
	};

	return (
		<tr
			onClick={openMessage}
			className={styles.Messages}
		>
			<td className={styles.author}>
				{props.author}
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