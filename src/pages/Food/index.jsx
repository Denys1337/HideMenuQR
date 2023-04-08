import React from 'react';
import CardMenuItem from '../../components/CardMenuItem';
import { dataFoodMenu } from '../../core/data';
import styles from './FoodMenu.module.scss';

const Food = () => {
	console.log('object');
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.backToMenu}>
				<a href="/">
					<span>&#8592;</span> Повернутись на головне меню
				</a>
			</h2>
			{dataFoodMenu.map(item => (
				<div key={item.id} className={styles.wrapper__item}>
					<CardMenuItem item={item} key={item.id} />
				</div>
			))}
		</div>
	);
};

export default Food;
