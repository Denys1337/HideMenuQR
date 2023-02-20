import React from 'react';
import { dataBArMenu } from '../../core/data';
// styles
import styles from './BarMenu.module.scss';

const BarMenu = () => {
	console.log('object');
	return (
		<div className={styles.wrapper}>
			<ul className={styles.wrapper__menu}>
				{dataBArMenu.map(item => (
					<li
						key={item.link}
						onClick={() => {
							window.location.href = item.link;
						}}
					>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default BarMenu;
