import React from 'react';
// images
import logo from '../../assets/images/logo.jpg';
// styles
import styles from './Logo.module.scss';

const Logo = () => (
	<div className={styles.logo}>
		<img src={logo} alt="" />
	</div>
);

export default Logo;
