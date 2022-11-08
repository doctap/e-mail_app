import React from 'react';
import styles from './BurgerButton.module.scss';

interface IBurgerButton {
	onClick(): void;
	iconName: string;
	fontSize?: string;
	color?: string;
}

export default function BurgerButton(props: IBurgerButton) {
	return (
		<button
			className={styles.burgerButton}
			style={{
				fontSize: props.fontSize ?? '1rem',
				color: props.color ?? '#000'
			}}
			onClick={props.onClick}
			children={props.iconName}
		/>
	)
}
