import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  speedDial: {
	position: 'fixed',
	bottom: theme.spacing(2),
	right: theme.spacing(2),
  },
}));

const actions = [
  { name: 'Asset',   icon: <FontAwesomeIcon icon="image" size="1x"/> },
  { name: 'Package', icon: <FontAwesomeIcon icon="cube"  size="1x"/> },
];

const FloatingButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen  = () => setOpen(true);

  return (
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
		  onClick={handleClose}
		/>
	  ))}
	</SpeedDial>
  );

};


//const FloatingButton = () => {
//  <Link to="/package/new">
//	<Fab size="medium" color="secondary" aria-label="add" className={classes.addButton}>
//	  <AddIcon />
//	</Fab>
//  </Link>
//};

export default FloatingButton;
