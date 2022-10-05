import React from 'react';
import styles from './ButtonMenu.module.scss';

interface IButtonMenu {
	children: string;
	func: (param?: string) => void;
}

export default function ButtonMenu(props: IButtonMenu) {
	return (
		<button className={styles.option} name={props.children} children={props.children} onClick={(e) => props.func(e.currentTarget.name)}/>
	)
}
