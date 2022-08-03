import React from 'react';
import styles from './MyButton.module.scss';

export enum BtnVariants {
	Primary = 1,
	Border = 2,
	BtnText = 3,
	Submit = 4,
}

export interface IButtonProps {
	name: string;
	type: 'button' | 'reset' | 'submit';
	model: BtnVariants;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MyButton(props: IButtonProps) {

	const variantBtn = (v: BtnVariants) => {
		switch (v) {
			case BtnVariants.Border: return styles.btnBorder;

			case BtnVariants.Primary: return styles.btnPrimary;

			case BtnVariants.BtnText: return styles.btnText;

			default:
				break;
		}
	}

	return (
		<button
			onClick={props.onClick}
			type={props.type}
			className={variantBtn(props.model)}
			disabled={props.disabled}
		>
			<span className={styles.spanBorder}>
				{props.name}
			</span>
		</button>
	)
}