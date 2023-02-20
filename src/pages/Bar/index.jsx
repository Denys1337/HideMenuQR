import React from 'react';
// component
import CardMenuItem from '../../components/CardMenuItem';
import BarMenu from '../../components/BarMenu';
// styles
import styles from './Bar.module.scss';
// helpers
import { dataBArMenu } from '../../core/data';

const Bar = () => {
	console.log('object');
	return (
		<div className={styles.wrapper}>
			<BarMenu />

			{dataBArMenu.map(item => (
				<div key={item.id} className={styles.wrapper__item}>
					<a href={item.link} id={item.id} aria-hidden="true">
						{item.title}
					</a>
					<CardMenuItem />
				</div>
			))}
		</div>
	);
};

export default Bar;
