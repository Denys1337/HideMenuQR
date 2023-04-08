import React from 'react';
// component
// import CardMenuItem from '../../components/CardMenuItem';
// import BarMenu from '../../components/BarMenu';
// styles
import styles from './Bar.module.scss';
// helpers
// import { dataBar, dataBArMenu } from '../../core/data';

const Bar = () => {
	// const componentBarSection = id => {
	// 	const data = dataBar.filter(item => item.id === id);
	// 	return data[0].data.map(item => item);
	// };
	console.log('object');
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.backToMenu}>
				<a href="/">
					<span>&#8592;</span> Повернутись на головне меню
				</a>
			</h2>
			{/* <BarMenu />

			{dataBArMenu.map(item => (
				<div key={item.id} className={styles.wrapper__item}>
					<a href={item.link} id={item.id} aria-hidden="true">
						{item.title}
					</a>
					{componentBarSection(item.id).map(item => (
						<CardMenuItem item={item} key={item.id} />
					))}
				</div>
			))} */}
			<h1>Знаходиться в пропрацюванні</h1>
		</div>
	);
};

export default Bar;
