import React, { useState } from 'react';
import FolderManagementButton from '../folderManagementButton/FolderManagementButton';
import TextField from '../inputs/TextField';
import styles from './FolderManager.module.scss';



export default function FolderManager() {

	const [changeState, setChangeState] = useState(false);

	const actionsHandler = (value: string) => {
		if (value === 'create') setChangeState(!changeState);
		if (value === 'delete') console.log('delete');
	}

	const getFolderName = (name: string) => {
		console.log(name);
	}

	return (
		<form className={styles.folderManager}>

			<div className={styles.TextField}>
				{
					changeState
						?
						<TextField onChange={getFolderName} placeholder='Folder name' />
						:
						'Folder Manager'
				}
			</div>

			<div className={styles.controlButtons}>
				<FolderManagementButton
					type='submit'
					action={changeState ? 'send' : 'create'}
					onClick={actionsHandler}
				/>
				<FolderManagementButton
					type='button'
					action='delete'
					onClick={actionsHandler}
				/>
			</div>
		</form>
	)
}
