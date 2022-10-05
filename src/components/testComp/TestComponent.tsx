import React, { useState } from 'react'
import TestInput from './TestInput';
import styles from './TestComponent.module.scss';

interface ITestComponent {
	someProps?: string;
}

export default function TestComponent(props: ITestComponent) {

	// const [ShowValueInput, setShowValueInput] = useState('Hello, world!');
	const [showOpt, setShowOpt] = useState(false);
	console.log(showOpt)

	if (props.someProps === 'hide') return null;
	return (
		<div
			onMouseEnter={() => setShowOpt(true)}
			onMouseLeave={() => setShowOpt(false)}>
			<div
			>
				Replace
			</div>

			{
				showOpt ?
					<div
					>

						<div>1111</div>
						<div>2222</div>
						<div>3333</div>

					</div>
					:
					null
			}

		</div>
		// <div>
		// 	{ShowValueInput}


		// 	<div style={{padding: '2rem'}}> 
		// 	<TestInput func={value => setShowValueInput(value)}/>
		// 	</div>
		// </div>
	)
}
