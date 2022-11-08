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
				<BurgerButton color='rgb(46, 47, 59)' iconName='menu' onClick={() => 0} fontSize='2rem' />
			</div>
		</div>
	)
}
