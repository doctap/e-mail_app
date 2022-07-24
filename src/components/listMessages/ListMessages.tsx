import React from 'react';
import Message, { IMessage } from '../message/Message';
import styles from './ListMessages.module.scss';

interface IListMessages {
	messages: IMessage[];
}

export default function ListMessages(props: IListMessages) {
	return (
		<table className={styles.ListMessages}>
			{props.messages.map((item, i)=>
				<Message
					key={i}
					author={item.author}
					message={item.message}
					date={item.date}
				/>
			)}
		</table>
	)
}
