import uniqId from 'uniqid';
import { IFolder } from "../components/folderList/FolderList";


const messageDate = new Date().toLocaleDateString();

export const folders: IFolder[] = [
	{
		name: 'Outgoing',
		requiredFolder: true,
		isSelected: true,
		messages: [
			{
				author: 'Norman Morales',
				message: 'Hey boy, nice hairs😁 loremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the lik.',
				date: messageDate,
				id: uniqId(),
				marker: true,
			},
			{
				author: 'Clyde Medina',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
				id: uniqId(),
				marker: true,
			},
			{
				author: 'Norman Morales',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Clifford Curtis',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Brian Stewart',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
		],
	},
	{
		name: 'Incoming',
		requiredFolder: true,
		isSelected: false,
		messages: [
			{
				author: 'Vasili Nikiforov',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Jose Weber',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Vasili Nikiforov',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Kimberly Moreno',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Jonathan Marshall',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
		],
	},
	{
		name: 'Drafts',
		requiredFolder: true,
		isSelected: false,
		messages: [
			{
				author: 'James Watson',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Laurie Williams',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Jose Wise',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Helen Pope',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Randall Thomas',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
		],
	},
	{
		name: 'Deleted',
		requiredFolder: true,
		isSelected: false,
		messages: [
			{
				author: 'Jeff Davis',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Judy Alexander',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Paul Russell',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Peter Weaver',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Brent Morgan',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
		],
	},
	{
		name: 'Spam',
		requiredFolder: true,
		isSelected: false,
		messages: [
			{
				author: 'Mario Stephens',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Rafael Turner',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Mario Stephens',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Charles Hill',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
			{
				author: 'Charlene Davis',
				message: 'Hey girl, how is going?',
				date: messageDate,
				id: uniqId(),
				marker: false,
			},
		],
	},
];