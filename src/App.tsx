import React, { useState } from 'react';
import ListMessages from './components/listMessages/ListMessages';
import { folders } from './server/Server';
import styles from './App.module.scss';
import Menu from './components/menu/Menu';
import { IFolder } from './components/folderList/FolderList';
import { IMessage } from './components/message/Message';

function App() {

	const [messages, setMessages] = useState(folders[0].messages);

	const getFolder = (folderName: string) => {
		const messages = folders.find(folder => folder.name === folderName)?.messages;
		if (messages !== undefined) setMessages(messages);
	};

	const deleteMessage = (IDMessage: string) => {
		const findingFolder: IFolder = folders.find(f => f.messages.some(m => m.id === IDMessage))
			?? { name: '', messages: [], requiredFolder: true };

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


	return (
		<div className={styles.App}>

			<div className={styles.Menu}>
				<Menu getCurrentFolderName={getFolder} />
			</div>

			<div className={styles.ListMessages}>
				<ListMessages
					messages={messages}
					deleteMessage={deleteMessage}
					markMessage={markMessage}
				/>
			</div>
			{/* <TestComponent /> */}

		</div>
	);
}

export default App;