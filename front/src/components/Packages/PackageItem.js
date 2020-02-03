import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  root: {
	maxWidth: 345,
  },
  view: {
	marginLeft: 'auto',
	textDecoration: 'none',
  },
  eye: {
	display: 'inline-block',
	marginLeft: '5px',
	marginRight: '10px',
  },
  download: {
	display: 'inline-block',
  }
}));

const PackageItem = ({ package: { id, name, date, author, views, downloads, short_description } }) => {
  const classes = useStyles();

  return (
	<Grid item>
	  <Card className={classes.root}>

		<CardHeader
		  avatar={<FontAwesomeIcon icon="cube" size="2x" />}
		  action={
			<IconButton aria-label="settings">
			  <FavoriteBorderIcon style={{fontSize: '90%'}}/>
			</IconButton>
		  }
		  title={name}
		  subheader={date + ' • ' + author}
		/>

		<CardContent>
		  <Typography variant="body2" color="textSecondary" component="p">{short_description}</Typography>
		</CardContent>

		<CardActions disableSpacing>
		  <div className={classes.eye}><FontAwesomeIcon icon="eye" /> {views}</div>
		  <div className={classes.download}><FontAwesomeIcon icon="download" /> {downloads}</div>

		  <Link to={"/package/" + id} className={classes.view}>
			<Button  aria-label="view">View</Button>
		  </Link>
		</CardActions>

	  </Card>
	</Grid>
  );
}

export default PackageItem;
