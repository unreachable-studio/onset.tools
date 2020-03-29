import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  AppBar: {
    backgroundColor: theme.palette.background.paper,
  },
  headerPackageView: {
    display: "flex",
    justifyContent: "space-between"
  },
  bigPackageTitle: {
    padding: '10px 20px',
    verticalAlign: 'middle',
  },
  packageName: {
    marginLeft: '10px'
  },
  packageLikes: {
    padding: '7px 30px 0px',
  },
  packageLikesCount: {
    verticalAlign: 'middle',
    marginLeft: '-5px'
  },
  packageId: {
    opacity: '80%',
    fontSize: '1rem',
  },
  tableCellValues: {
    opacity: "80%"
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PackageViewItem = ({ package: { id, name, long_description, likes} }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // VARIABLE DE TEST 
  const rows = [
    { version: "V2.0.0", stability: "Release", downloads: "15", updateDate: "03/02/2020"},
    { version: "V1.0.0", stability: "Beta", downloads: "15120", updateDate: "02/02/2020"}
  ];

  return (
    <div className={classes.AppBar}>
      <AppBar position="static" color="default">
        <div className={classes.headerPackageView}>
          <Typography variant="h5" className={classes.bigPackageTitle}><FontAwesomeIcon icon="cube" /><span className={classes.packageName}>{name}<span className={classes.packageId}>#{id}</span></span></Typography>
          <div className={classes.packageLikes}>
            <span className={classes.packageLikesCount}>{likes}</span>
            <IconButton aria-label="settings">
			        <FavoriteBorderIcon style={{fontSize: '90%'}}/>
			      </IconButton>
          </div>
        </div>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Version" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ReactMarkdown source={long_description} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Version</TableCell>
                <TableCell component="th" align="left">Stability</TableCell>
                <TableCell component="th" align="left">Dowloads</TableCell>
                <TableCell component="th" align="left">Update Date</TableCell>
                <TableCell component="th" align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.version}
                  </TableCell>
                  <TableCell className={classes.tableCellValues} align="left">{row.stability}</TableCell>
                  <TableCell className={classes.tableCellValues} align="left">{row.downloads}</TableCell>
                  <TableCell className={classes.tableCellValues} align="left">{row.updateDate}</TableCell>
                  <TableCell className={classes.tableCellValues} align="right"><FontAwesomeIcon size="2x" icon={['fab', 'github']} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </div>
  );
}

export default PackageViewItem;