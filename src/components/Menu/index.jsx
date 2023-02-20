/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
// components
import Logo from '../Logo';
// helpers
import { ROUTE } from '../../core/routers';
// styles
import styles from './Menu.module.scss';

const Menu = () => {
	console.log('objectsdfgdfgdfgddfgdf');

	return (
		<div className={styles.menuWrapper}>
			<div className={styles.menuWrapper__item}>
				<Link to="/bar">
					<h2>Бар</h2>
				</Link>
			</div>
			<Logo />
			<div className={styles.menuWrapper__item}>
				<Link to={ROUTE.base.food}>
					<h2>Кухня</h2>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
