import React, { useState } from 'react';
import ListMessages from './components/listMessages/ListMessages';
import { folders } from './server/Server';
import styles from './App.module.scss';
import Menu from './components/menu/Menu';

function App() {

	const [messages, setMessages] = useState(folders[0].messages);

	const getFolder = (isName: string) => {
		folders.map(folder => folder.name === isName ? setMessages(folder.messages) : null)
	};

	return (
		<div className={styles.App}>

			<div className={styles.Menu}>
				<Menu getCurrentFolderName={getFolder} />
			</div>

			<div className={styles.ListMessages}>
				<ListMessages messages={messages} />
			</div>


		</div>
	);
}

export default App;