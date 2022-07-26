import React from 'react';
import Folder from '../folder/Folder';
import { IMessage } from '../message/Message';

interface IMenu {
	folders: IFolder[];
	getCurrentFolderName(name: string): void;
}

export interface IFolder {
	name: string;
	requiredFolder: boolean;
	messages: IMessage[];
}

export default function Menu(props: IMenu) {

	return (
		<>
			{props.folders.map(folder =>
				<Folder
					key={folder.name}
					name={folder.name}
					onClick={props.getCurrentFolderName}
					requiredFolder={folder.requiredFolder}
				/>
			)}
		</>
	)
}
