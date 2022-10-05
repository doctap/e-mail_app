import React from 'react';
import styles from './ModalBackGround.module.scss';

interface IModalBackGround {
	isShowModalBackGround: boolean;
	children: React.ReactNode;
	onClose: () => void;
}

export default function ModalBackGround(props: IModalBackGround) {
	if (!props.isShowModalBackGround) return null;
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
