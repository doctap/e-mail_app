import React from 'react';
import styles from './TextField.module.scss';

interface ITextField {
	placeholder: string;
	onChange: (isValue: string) => void;
}

export default function TextField(props: ITextField) {

	const getFolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.target.value);
	}

	return (
		<input
			className={styles.TextField}
			placeholder={props.placeholder}
			onChange={getFolderName}
			autoFocus={true}
		/>
	)
}
