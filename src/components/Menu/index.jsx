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
			<h2>Бар</h2>
			<Logo />
			<h2>Кухня</h2>
		</div>
	);
};

export default Menu;
