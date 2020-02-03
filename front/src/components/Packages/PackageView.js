import React from "react";
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
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

import PackageViewAuthor from './PackageViewAuthors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: '60px',
  },
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

const PackageViewItem = ({ package: { id, name, downloads, long_description, likes} }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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



const PackageView = (props) => {
  const { match } = props;
  let {id} = match.params;

  const classes = useStyles();
  const packageContent = [{ id: 1, name: "First package",  date: "01/02/2003", author: { id: 42, pseudo: "bapmarty", postCount: 1485}, views: 1337, downloads: 256, likes: 12354, short_description: "The veefhfffewnfefewf ef eufew fuew feuw feu. fewh fry first package.", long_description: `# Welcome to StackEdit!

  Hi! I\'m your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.
  
  
  # Files
  
  StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**
  
  ## Create files and folders
  
  The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.
  
  ## Switch to another file
  
  All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.
  # Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Suspendisse facilisis vel nisl in feugiat. ## Integer hendrerit \n felis sollicitudin eros feugiat, ac efficitur dui luctus. Morbi pellentesque risus eu hendrerit tincidunt. 
  Sed tempus dolor at finibus commodo. Integer mi est, gravida quis enim ac, vehicula dignissim urna. Duis aliquet, neque eu rhoncus egestas, 
  mi lectus varius eros, eget luctus libero velit imperdiet sem. Praesent fermentum, metus vel iaculis eleifend, lorem turpis auctor metus, 
  rutrum porttitor mi purus vel massa. Nulla facilisi. Duis euismod massa arcu, vel fermentum sem vulputate ac. Maecenas imperdiet 
  tincidunt congue. Pellentesque sit amet congue nulla. Vestibulum ut dignissim lectus. Duis id mollis leo.` }]
  return (
    <>
      <Container className={classes.root}>
        <Grid container grid={2} spacing={2}>
          <Grid item xs={12} md={8}>
          { packageContent.map((p, index) => <PackageViewItem key={index} package={p} />) }
          </Grid>
          <Grid item xs={12} md={4}>
          { packageContent.map((p, index) => <PackageViewAuthor key={index} package={p} />) }
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PackageView;
