import React from 'react'
import { Form } from 'react-bootstrap'

export interface IOptions {
	value: string;
	name: string;
}

interface ISortControl {
	onChange: (option: string) => void;
	options: IOptions[];
	value: string;
	defaultValue: string;
}

export default function SortControl(props: ISortControl) {
	return (
		<Form.Select
			value={props.value}
			onChange={event => props.onChange(event.target.value)}
			aria-label="Default select example"
			size='sm'
		>
			<option value='' disabled>{props.defaultValue}</option>
			{
				props.options.map(opt => <option key={opt.name} value={opt.value} children={opt.name} />)
			}
		</Form.Select>
	)
}
