import React from 'react';
// images
import logo from '../../assets/images/logo.jpg';
// styles
import styles from './Loader.module.scss';

const Loader = () => {
	console.log('object');
	return (
		<div className={styles.loader}>
			<img src={logo} alt="" />
		</div>
	);
};

export default Loader;
