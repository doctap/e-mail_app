import React, { useState } from 'react';
import ListMessages from './components/listMessages/ListMessages';
import Menu from './components/menu/Menu';
import { folders } from './server/Server';
import styles from './App.module.scss';
import FolderManager from './components/folderManager/FolderManager';

function App() {

	const [messages, setMessages] = useState(folders[0].messages);

	const getFolder = (isName: string) => {
		folders.map(folder => {
			if (folder.name === isName) setMessages(folder.messages);
		});
	}

	return (
		<div className={styles.App}>

			<div className={styles.aside}>
				<div className={styles.Menu}>
					<Menu
						folders={folders}
						getCurrentFolderName={getFolder}
					/>
				</div>
				<div className={styles.FolderManagementButton}>
				<FolderManager />
				</div>
			</div>

			<div className={styles.ListMessages}>
				<ListMessages messages={messages} />
			</div>


		</div>
	);
}

export default App;