import React from 'react';
import styles from './Message.module.scss';

export interface IMessage {
	author: string;
	message: string;
	date: string;
}

export default function Message(props: IMessage) {
	return (
		<tr className={styles.Messages}>
			<td className={styles.author}>
				{props.author}
			</td>
			<td className={styles.message}>
				{props.message}
			</td>
			<td className={styles.date}>
				{props.date}
			</td>
		</tr>
	)
}