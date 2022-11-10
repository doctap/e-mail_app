import React from 'react';
import styles from './Icon.module.scss';

interface IIcon {
	iconName: string;
}

export default function Icon(props: IIcon & React.HTMLProps<HTMLDivElement>) {
	return (
		<div className={styles.icon} {...props} children={props.iconName} />
	)
}
