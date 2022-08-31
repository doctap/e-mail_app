import React from 'react';

interface ITestInput {
	func: (str: string) => void;
}

export default function TestInput(props: ITestInput) {
  return (
	 <input type="text" onChange={event => props.func(event.currentTarget.value)} />
  )
}
