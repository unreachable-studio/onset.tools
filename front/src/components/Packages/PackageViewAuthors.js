import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from 'url-parse';

const useStyles = makeStyles({
  cardTop: {
	marginTop: '25px',
  },
  TitleCard: {
	marginBottom: '15px',
  },
  AuthorCard: {
	display: 'flex'
  },
  AuthorLogo: {
	marginRight: '20px'
  },
  AuthorPseudo: {
	margin: 0,
	padding: 0
  },
  informationCardBlock: {
	margin: '5px 0'
  },
  latestVersionCard: {
	display: "flex",
	justifyContent: "space-between",
  },
  latestVersionCardRelease: {
	marginTop: '20px'
  }
});

const DisplayAuthors = ({ author: { pseudo, role, logo}}) => {
  const classes = useStyles();
  return (
	<>
	  <CardContent className={classes.AuthorCard}>
		<div className={classes.AuthorLogo}>
		  <Avatar alt={pseudo} src={logo} />
		</div>
		<div>
		  <h3 className={classes.AuthorPseudo}>{pseudo}</h3>
		  <i>{role}</i>
		</div>
	  </CardContent>
	</>
  );
}

const PackageViewAuthors = ({ package: { date, authors, views, downloads, url } }) => { 
  const classes = useStyles();

  // VARIABLE DE TEST
  const latestVersion = { version: "V2.0.0", stability: "Release", downloads: "15", updateDate: "03/02/2020"};
  const urlObj = parse(url);

  return (
	<>
	  <Card variant="elevation">
		<CardContent>
		  <Typography color="initial" variant="h5" className={classes.TitleCard}>
			Authors
		  </Typography>
		  <Divider />
		  {authors.map((a, index) => <DisplayAuthors key={index} author={a} />)}
		</CardContent>
	  </Card>

	  <Card className={classes.cardTop} variant="elevation">
		<CardContent>
		  <Typography color="initial" variant="h5" className={classes.TitleCard}>
			Infos
		  </Typography>
		  <Divider />
		  <div className={classes.informationCardBlock}>
		    <strong>Source:</strong> <a href={url} color="primary">{urlObj.hostname + urlObj.pathname.substr(0, urlObj.pathname.length - (urlObj.pathname.endsWith('/') ? 1 : 0))}</a>
		  </div>
		  <div className={classes.informationCardBlock}>
			<strong>Create:</strong> {date}
		  </div>
		  <div className={classes.informationCardBlock}>
			<strong>Views:</strong> {views}
		  </div>
		  <div className={classes.informationCardBlock}>
			<strong>Global downloads:</strong> {downloads}
		  </div>
		</CardContent>
	  </Card>

	  <Card className={classes.cardTop} variant="elevation">
		<CardContent>
		  <Typography color="initial" variant="h5" className={classes.TitleCard}>
			Latest Version
		  </Typography>
		  <Divider />
		  <div className={classes.latestVersionCard}>
			<div className={classes.latestVersionCardRelease}>
			  {latestVersion.stability}
			</div>
			<div>
			  <div>
				<Typography variant="h6">Version</Typography>
			  </div>
			  <div>
				<span>{latestVersion.version} • {date}</span>
			  </div>
			</div>
			<div className={classes.latestVersionCardRelease}>
			  <a href={url}><FontAwesomeIcon icon="download" /></a>
			</div>
		  </div>
		</CardContent>
	  </Card>
	</>
  );
}

export default PackageViewAuthors;
