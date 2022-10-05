import React, { useMemo, useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import ListMessages from '../listMessages/ListMessages';
import { IMessage } from '../message/Message';
import SearchBar from '../searchBar/SearchBar';
import SortControl, { IOptions } from '../sortControl/SortControl';

interface IBoardMessages {
	messages: IMessage[];
	deleteMessage: (idMes: string) => void;
	markMessage: (idMes: string) => void;
	replaceMessage: (idMes: string, folderName: string) => void;
}

export default function BoardMessages(props: IBoardMessages) {

	const [selectedSort, setSelectedSort] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const sortedMessage = useMemo(() => {
		if (selectedSort) {
			if (selectedSort === 'author') return ([...props.messages].sort((a, b) => a.author.localeCompare(b.author)));
			if (selectedSort === 'marker') return ([...props.messages].sort((a, b) => (a.marker === b.marker) ? 0 : a.marker ? -1 : 1));
		}
		return props.messages;
	}, [selectedSort, props.messages]);

	const sortedAndSearchedMessage = useMemo(() => {
		return sortedMessage.filter(message => message.message.includes(searchQuery));
	}, [searchQuery, sortedMessage])

	return (
		<>
			<InputGroup className="mb-3">
				<Button
					onClick={() => {
						setSelectedSort('') 
						setSearchQuery('')
					}}
					variant="outline-secondary"
					size='sm'
					children='Reset sort'
				/>
				<SearchBar
					value={searchQuery}
					placeholder='Search by message...'
					onChange={value => setSearchQuery(value)}
				/>
				<SortControl
					value={selectedSort}
					options={optionsForSelectSort}
					onChange={sort => setSelectedSort(sort)}
					defaultValue='Sort by...'
				/>
			</InputGroup>

			<ListMessages
				replaceMessage={props.replaceMessage}
				messages={sortedAndSearchedMessage}
				deleteMessage={props.deleteMessage}
				markMessage={props.markMessage}
			/>
		</>
	)
}

const optionsForSelectSort: IOptions[] = [
	{
		name: 'author',
		value: 'author',
	},
	{
		name: 'marker',
		value: 'marker',
	},
]
