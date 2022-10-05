import React from 'react';
import ButtonMenu from '../buttons/buttonMenu/ButtonMenu';
import DropDown from '../select/DropDown';
import styles from './ContextMenu.module.scss';

export interface IOptionContextMenu {
	isDropDown: boolean;
	optionName: string;
	func: (selectFolder?: string) => void;
	dropdownOptions?: string[];
};

interface IContextMenu {
	position: {
		x: number,
		y: number,
	};
	options: IOptionContextMenu[];
}

export default function ContextMenu(props: IContextMenu) {
	return (
		<div
			className={styles.custom_context_menu}
			style={{ top: props.position.y, left: props.position.x }}
		>
			{
				props.options.map(option => {
					return (
						option.isDropDown ?
							<DropDown name={option.optionName} items={option.dropdownOptions ?? []} func={option.func} key={option.optionName} />
							:
							<ButtonMenu children={option.optionName} func={option.func} key={option.optionName} />
					)
				})
			}
		</div>
	)
}