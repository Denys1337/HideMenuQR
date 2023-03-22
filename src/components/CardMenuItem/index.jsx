import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
// styles
import styles from './CardMenuItem.module.scss';
// images
import coctails from '../../assets/images/coctails.jpg';

const CardMenuItem = ({ item }) => (
	<Card sx={{ maxWidth: 500, width: '90%', fontFamily: 'Ustroke', color: '#fff' }} className={styles.wrapper}>
		<div className={styles.wrapper__image}>
			<CardMedia component="img" height="194" image={item.image ? item.image : coctails} alt="" />
		</div>
		<div className={styles.wrapper__info}>
			<h2>{item.title}</h2>
			<CardContent>
				<Typography sx={{ fontFamily: 'Ustroke', color: '#fff' }}>{item.description}</Typography>
			</CardContent>
			<CardActions
				disableSpacing
				sx={{ display: 'flex', justifyContent: item.description ? 'flex-end' : 'center', fontSize: '20px' }}
			>
				{item.price} грн
			</CardActions>
		</div>
	</Card>
);

export default CardMenuItem;
