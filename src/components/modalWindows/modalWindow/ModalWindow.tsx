import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './ModalWindow.module.scss';

interface ISetFolderName {
	label: string;
	buttonName: string;
	getData(name: string): void;
}

export default function ModalWindow(props: ISetFolderName) {

	const [isChangedName, setIsChangedName] = useState('');

	const sendChangedName = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		props.getData(isChangedName);
	};;

	return (
		<div className={styles.modalWindow}>
			<InputGroup>
				<Form.Label htmlFor="hld74">{props.label}</Form.Label>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Enter name"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						value={isChangedName}
						onChange={event => setIsChangedName(event.target.value)}
						type="text"
					/>
					<Button onClick={sendChangedName} type='button' variant="primary" id="button-addon2">
						{props.buttonName}
					</Button>
				</InputGroup>
			</InputGroup>
		</div>
	)
}
