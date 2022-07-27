import React, { useState } from 'react';
import { BtnTickVariants } from '../buttons/btnTick/BtnTick';
import Button, { BtnVariants } from '../buttons/button/Button';
import InputBtn from '../inputs/inputBtn/InputBtn';
import styles from './FolderManager.module.scss';

interface IFolderManager {
	sendFolderName: (name: string) => void;
}

export default function FolderManager(props: IFolderManager) {

	const [showInput, setShowInput] = useState(false);

	return (
		<div className={styles.folderManager}>

			<div className={styles.controlButtons}>
				<Button onClick={() => setShowInput(!showInput)} name='create' type='button' variant={BtnVariants.BtnText} />
			</div>
			{
				showInput
					?
					<div className={styles.TextField}>
						<InputBtn
							onClick={props.sendFolderName}
							placeholderInput='Folder name'
							typeButton='submit'
							typeInput='text'
							variantBtn={BtnTickVariants.Add}
						/>
					</div>
					:
					null
			}
		</div>
	)
}