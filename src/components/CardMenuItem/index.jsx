import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const CardMenuItem = () => (
	<Card sx={{ maxWidth: 450 }}>
		<CardHeader title="Shrimp and Chorizo Paella" />
		<CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="" />
		<CardContent>
			<Typography>
				This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
				cup of frozen peas along with the mussels, if you like.
			</Typography>
		</CardContent>
		<CardActions disableSpacing>228</CardActions>
	</Card>
);

export default CardMenuItem;
