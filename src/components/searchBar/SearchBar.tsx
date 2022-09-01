import React from 'react';
import { Form } from 'react-bootstrap';
// import styles from './SearchBar.module.scss';

interface ISearchBar {
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}

export default function SearchBar(props: ISearchBar) {
	return (
		<Form.Control
			type="text"
			placeholder={props.placeholder}
			value={props.value}
			onChange={e => props.onChange(e.currentTarget.value)}
			size='sm'
		/>
	)
}
