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

const CardMenuItem = () => (
	<Card sx={{ maxWidth: 450, fontFamily: 'Ustroke', color: '#fff' }} className={styles.wrapper}>
		<h2>Shrimp and Chorizo Paella</h2>
		<CardMedia component="img" height="194" image={coctails} alt="" />
		<CardContent>
			<Typography sx={{ fontFamily: 'Ustroke', color: '#fff' }}>
				This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
				cup of frozen peas along with the mussels, if you like.
			</Typography>
		</CardContent>
		<CardActions
			disableSpacing
			sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '15px', fontSize: '20px' }}
		>
			228 грн
		</CardActions>
	</Card>
);

export default CardMenuItem;
