import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './SetFolderName.module.scss';

interface ISetFolderName {
	hideWindow(): void;
	callChangedName(name: string): void;
}

export default function SetFolderName(props: ISetFolderName) {

	const [isChangedName, setIsChangedName] = useState('');

	const getChangedName = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		props.callChangedName(isChangedName);
	};;

	return (
		<div
			className={styles.backGroundDark}
			onClick={props.hideWindow}
		>

			<div className={styles.modalWindow}>
				<InputGroup>
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="New name"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							value={isChangedName}
							onChange={event => setIsChangedName(event.target.value)}
							type="text"
						/>
						<Button onClick={getChangedName} type='button' variant="primary" id="button-addon2">
							Edit
						</Button>
					</InputGroup>
				</InputGroup>
			</div>

		</div>
	)
}
