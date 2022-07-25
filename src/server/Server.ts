import { IFolder } from "../components/menu/Menu";

const date = new Date();
const messageDate = [date.getMonth(), date.getDate(), date.getFullYear()].join('.').toString();



export const folders: IFolder[] = [
	{
		name: 'Outgoing',
		requiredFolder: true,
		messages: [
			{
				author: 'Norman Morales',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
			},
			{
				author: 'Clyde Medina',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
			},
			{
				author: 'Norman Morales',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
			},
			{
				author: 'Clifford Curtis',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
			},
			{
				author: 'Brian Stewart',
				message: 'Hey boy, nice hairs😁',
				date: messageDate,
			},
		],
	},
	{
		name: 'Incoming',
		requiredFolder: true,
		messages: [
			{
				author: 'Vasili Nikiforov',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Jose Weber',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Vasili Nikiforov',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Kimberly Moreno',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Jonathan Marshall',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
		],
	},
	{
		name: 'Drafts',
		requiredFolder: true,
		messages: [
			{
				author: 'James Watson',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Laurie Williams',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Jose Wise',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Helen Pope',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Randall Thomas',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
		],
	},
	{
		name: 'Deleted',
		requiredFolder: true,
		messages: [
			{
				author: 'Jeff Davis',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Judy Alexander',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Paul Russell',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Peter Weaver',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Brent Morgan',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
		],
	},
	{
		name: 'Spam',
		requiredFolder: true,
		messages: [
			{
				author: 'Mario Stephens',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Rafael Turner',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Mario Stephens',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Charles Hill',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
			{
				author: 'Charlene Davis',
				message: 'Hey girl, how is going?',
				date: messageDate,
			},
		],
	},
];