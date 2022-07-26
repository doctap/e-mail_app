import React from 'react';
import styles from './InputText.module.scss';

export enum InputVariants {
	InputText,
	InputBtn
}

export interface IInputProps {
	type: string;
	placeholder: string;
	variant: InputVariants;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	autoFocus: boolean;
}

export default function InputText(props: IInputProps) {

	const inputStyle = (v: InputVariants) => {
		switch (v) {
			case InputVariants.InputText: return styles.inputText;

			case InputVariants.InputBtn: return `${styles.inputText_paddingRight} ${styles.inputText}`;

			default:
				break;
		}
	}

	return (
		<input
			autoFocus={props.autoFocus}
			type={props.type}
			className={inputStyle(props.variant)}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
}
