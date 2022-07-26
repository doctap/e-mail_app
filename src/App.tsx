import React, { useState } from 'react';
import ListMessages from './components/listMessages/ListMessages';
import Menu from './components/menu/Menu';
import { folders } from './server/Server';
import styles from './App.module.scss';
import FolderManager from './components/folderManager/FolderManager';

function App() {

	const [messages, setMessages] = useState(folders[0].messages);

	const [arrFolder, setArrFolder] = useState(folders);

	const addFolder = (isFolderName: string) => {
		if (isFolderName)
			folders.push({
				name: isFolderName,
				requiredFolder: false,
				messages: [
					{
						author: 'Norman Morales',
						message: 'Hey bitch, nice hairs😁',
						date: '234',
					},
				]
			});
		const copyFolders = folders.slice();
		setArrFolder(copyFolders);
	};

	const getFolder = (isName: string) => {
		folders.map(folder => folder.name === isName ? setMessages(folder.messages) : null)
	}

	return (
		<div className={styles.App}>

			<div className={styles.aside}>
				<div className={styles.Menu}>
					<Menu
						folders={arrFolder}
						getCurrentFolderName={getFolder}
					/>
				</div>
				<div className={styles.FolderManagementButton}>
					<FolderManager sendFolderName={addFolder} />
				</div>
			</div>

			<div className={styles.ListMessages}>
				<ListMessages messages={messages} />
			</div>


		</div>
	);
}

export default App;