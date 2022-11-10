import React from 'react'
import BurgerButton from '../buttons/burgerButton/BurgerButton'
import Logo from '../logo/Logo';
import styles from './LogoBurger.module.scss';

export default function LogoBurger() {
	return (
		<div className={styles.logoBurger}>
			<div className={styles.logotype}>
				<Logo />
				<div className={styles.logotypeText}>
					Your-Mail
				</div>
			</div>
			<div>
				<BurgerButton color='rgba(44, 65, 90)' iconName='menu' onClick={() => 0} fontSize='1.6rem' />
			</div>
		</div>
	)
}
