import React, { useState } from 'react';
import { folders } from './server/Server';
import styles from './App.module.scss';
import Menu from './components/menu/Menu';
import { IFolder } from './components/folderList/FolderList';
import { IMessage } from './components/message/Message';
import BoardMessages from './components/boardMessages/BoardMessages';
import TestComponent from './components/testComp/TestComponent';


function App() {
	const [messages, setMessages] = useState(folders[0].messages);

	const getFolder = (folderName: string) => {
		const messages = folders.find(folder => folder.name === folderName)?.messages;
		if (messages !== undefined) setMessages(messages);
	};

	const deleteMessage = (IDMessage: string) => {
		const findingFolder: IFolder = folders.find(f => f.messages.some(m => m.id === IDMessage))
			?? { name: '', messages: [], requiredFolder: true };

		const deletedMessage: IMessage = findingFolder.messages.find(m => m.id === IDMessage)
			?? { author: '', date: '', id: '', marker: false, message: '' };

		const remoteMailbox: IFolder = folders.find(f => f.name === 'Deleted')
			?? { name: '', messages: [], requiredFolder: true };
		remoteMailbox.messages = [deletedMessage, ...remoteMailbox.messages];

		findingFolder.messages = findingFolder.messages.filter(m => m.id !== IDMessage);
		setMessages(findingFolder.messages);
	};

	const markMessage = (IDMessage: string) => {
		const findingFolder: IFolder = folders.find(f => f.messages.some(m => m.id === IDMessage))
			?? { name: '', messages: [], requiredFolder: true };
		const findingMessage: IMessage = findingFolder.messages.find(m => m.id === IDMessage)
			?? { author: '', date: '', id: '', marker: false, message: '' };

		findingMessage.marker = !findingMessage.marker;
		setMessages(findingFolder.messages);
	};

	const replaceMessage = (idMessage: string, folderTo: string) => {
		const findingFolder = folders.find(f => f.messages.some(m => m.id === idMessage)) ?? { name: '', messages: [], requiredFolder: false };
		const findingMessage: IMessage = findingFolder.messages.find(m => m.id === idMessage) ?? { id: '', author: '', date: '', marker: false, message: '' };

		findingFolder.messages = findingFolder.messages.filter(m => m.id !== idMessage);
		const replacingFolder = folders.find(f => f.name === folderTo) ?? { name: '', messages: [], requiredFolder: true };

		replacingFolder.messages = [findingMessage, ...replacingFolder.messages];
		setMessages(findingFolder.messages);
	};

	return (
		<div className={styles.App}>

			<div className={styles.Menu}>
				<Menu getCurrentFolderName={getFolder} />
			</div>

			<div className={styles.BoardMessages}>
				<BoardMessages
					replaceMessage={replaceMessage}
					deleteMessage={deleteMessage}
					markMessage={markMessage}
					messages={messages}
				/>
			</div>

		</div>
	);
}

export default App;

{/* <TestComponent /> */}
