import React, { useState } from 'react'
import TestInput from './TestInput';

interface ITestComponent {
	someProps?: string;
}

export default function TestComponent(props: ITestComponent) {

	const [ShowValueInput, setShowValueInput] = useState('Hello, world!');

	if (props.someProps === 'hide') return null;
	return (
		<div>
			{ShowValueInput}


			<div style={{padding: '2rem'}}> 
			<TestInput func={value => setShowValueInput(value)}/>
			</div>
		</div>
	)
}
