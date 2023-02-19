/* eslint-disable arrow-body-style */
import React from 'react';
// components
import Logo from '../Logo';
// styles
import styles from './Menu.module.scss';

const Menu = () => {
	console.log('objectsdfgdfgdfgddfgdf');

	return (
		<div className={styles.menuWrapper}>
			<div className={styles.menuWrapper__item}>
				<h2>Бар</h2>
			</div>
			<Logo />
			<div className={styles.menuWrapper__item}>
				<h2>Кухня</h2>
			</div>
		</div>
	);
};

export default Menu;
