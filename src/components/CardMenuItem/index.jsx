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
		<h2>{item.title}</h2>
		<CardMedia component="img" height="194" image={coctails} alt="" />
		<CardContent>
			<Typography sx={{ fontFamily: 'Ustroke', color: '#fff' }}>{item.description}</Typography>
		</CardContent>
		<CardActions
			disableSpacing
			sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '15px', fontSize: '20px' }}
		>
			{item.price} грн
		</CardActions>
	</Card>
);

export default CardMenuItem;
