import React, { useState } from 'react';
import { BtnTickVariants } from '../buttons/btnTick/BtnTick';
import MyButton, { BtnVariants } from '../buttons/MyButton/MyButton';
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
				<MyButton onClick={() => setShowInput(!showInput)} name='create' type='button' model={BtnVariants.BtnText} />
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