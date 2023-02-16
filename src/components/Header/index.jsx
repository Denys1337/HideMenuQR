import React from 'react';
// component
import Menu from '../Menu';
// styles
import styles from './Header.module.scss';

const Header = () => {
	console.log('object');
	return (
		<div className={styles.header}>
			<Menu />
		</div>
	);
};

export default Header;
