import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Grid,
} from '@material-ui/core/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
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
	},
	paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));

const PackageItem = ({ package: { id, name, date, author, views, downloads, short_description }, ...props }) => {
  const classes = useStyles();
  return (
		<>    
    <Grid item xs={12}>
			<Paper className={classes.paper} elevation={3}>
			<Grid container spacing={2}>
          <Grid item>
						<FontAwesomeIcon icon="cube" size="2x" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
									{name}
                </Typography>
                <Typography variant="body2" gutterBottom>
									{short_description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
									{date + ' • ' + author}
                </Typography>
              </Grid>
            </Grid>
            <Grid item direction="column">
							<Grid item>
								<Typography variant="subtitle1">
									<div className={classes.eye}><FontAwesomeIcon icon="eye" /> {views}</div>
									<div className={classes.download}><FontAwesomeIcon icon="download" /> {downloads}</div>
								</Typography>
							</Grid>
							<Grid item container justify="flex-end">
								<Grid item>
									<Link to={"/package/" + id} className={classes.view}>
										<Button aria-label="view">View</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
          </Grid>
        </Grid>
			</Paper>
		</Grid>
	</>
	);
}

export default PackageItem;
