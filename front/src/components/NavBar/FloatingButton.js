import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import { Backdrop } from '@material-ui/core/';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  backdrop: {
	zIndex: theme.zIndex.drawer - 1000,
	color: '#fff',
  },
  speedDial: {
	position: 'fixed',
	bottom: theme.spacing(2),
	right: theme.spacing(2),
  },
}));

const actions = [
  { name: 'Asset',   icon: <FontAwesomeIcon icon="image" size="1x"/>, url: '/asset/new' },
  { name: 'Package', icon: <FontAwesomeIcon icon="cube"  size="1x"/>, url: '/package/new' },
];

const FloatingButton = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen  = () => setOpen(true);

  return (
	<>
	  <Backdrop open={open} className={classes.backdrop}/>
	  <SpeedDial
		ariaLabel="Publish a package/asset"
		className={classes.speedDial}
		icon={<SpeedDialIcon />}
		onClose={handleClose}
		onOpen={handleOpen}
		open={open}
		direction="up"
	  >
		{actions.map(action => (
		  <SpeedDialAction
			key={action.name}
			icon={action.icon}
			tooltipTitle={action.name}
			tooltipOpen
			onClick={() => { history.push(action.url); handleClose() }}
		  />
		))}
	  </SpeedDial>
	</>
  );

};

export default FloatingButton;
