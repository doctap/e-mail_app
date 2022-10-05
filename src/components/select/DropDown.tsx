import React, { useState } from 'react';
import ButtonMenu from '../buttons/buttonMenu/ButtonMenu';
import styles from './DropDown.module.scss';

interface IDropDown {
	name: string;
	items: string[];
	func: (param?: string) => void;
}

export default function DropDown(props: IDropDown) {

	const [showOpt, setShowOpt] = useState(false);
	return (
		<div
			onMouseEnter={() => setShowOpt(true)}
			onMouseLeave={() => setShowOpt(false)}
			className={styles.wrapper}
		>
			<div className={styles.name}>{props.name} <span className={styles.arrow}>chevron_right</span></div>
			{
				showOpt ?
					<ul className={styles.list}>
						{
							props.items.map(name => <li key={name} className={styles.item}><ButtonMenu children={name} func={props.func} /></li>)
						}
					</ul>
					:
					null
			}
		</div>
	)
}
