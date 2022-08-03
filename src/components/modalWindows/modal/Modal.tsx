import React from 'react';
import styles from './Modal.module.scss';

interface IModal {
	children: React.ReactNode;
	onClose: () => void;
}

export default function Modal(props: IModal) {
	return (
		<>
			<div
				className={styles.Modal}
				onClick={props.onClose}
			>

			</div>
			<div className={styles.asd}>
				{props.children}
			</div>
		</>
	)
}
