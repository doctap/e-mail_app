import React from 'react';
import styles from './ModalBackGround.module.scss';

interface IModal {
	children: React.ReactNode;
	onClose: () => void;
}

export default function ModalBackGround(props: IModal) {
	return (
		<>
			<div
				className={styles.Modal}
				onClick={props.onClose}
			/>
			<div className={styles.asd}>
				{props.children}
			</div>
		</>
	)
}
