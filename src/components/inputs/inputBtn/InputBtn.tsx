import React from 'react';
import BtnTick, { BtnTickVariants } from '../../buttons/btnTick/BtnTick';
import InputText, { InputVariants } from '../inputText/InputText';
import styles from './InputBtn.module.scss';

interface IInputBtn {
	typeInput: string;
	placeholderInput: string;
	typeButton: 'submit' | 'button';
	variantBtn: BtnTickVariants;
	onClick: (isValue: string) => void;
}

export default function InputBtn(props: IInputBtn) {

	let str: string;

	const getFolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
		str = e.target.value;
	};

	const sendFolderName = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.onClick(str);
	};

	return (
		<form className={styles.inputBtn}>
			<InputText
				autoFocus={true}
				onChange={getFolderName}
				type={props.typeInput}
				placeholder={props.placeholderInput}
				variant={InputVariants.InputBtn}
			/>
			<div className={styles.btnSubmit}>
				<BtnTick
					onClick={sendFolderName}
					type={props.typeButton}
					variant={props.variantBtn}
				/>
			</div>
		</form>

	)
}
