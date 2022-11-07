import React from 'react';
import styles from './BoxShadow.module.scss';

interface IBoxShadow {
	children: React.ReactNode;

}

export default function BoxShadow(props: IBoxShadow) {
	return (
		<div className={styles.wrapperBoxShadow}>
			{props.children} 
		</div>
	)
}
