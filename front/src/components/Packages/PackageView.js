import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Grid,
  Typography } from "@material-ui/core";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: '60px',
  },
  packageName: {
    marginLeft: '10px'
  },
}));

const PackageViewItem = ({ package: { id, name, date, author, views, downloads, description } }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5"><FontAwesomeIcon icon="cube" /><span className={classes.packageName}>{name}#{id}</span></Typography>
      <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
    </div>
  );
}

const PackageView = (props) => {
  const { match } = props;
  let {id} = match.params;

  const classes = useStyles();
  const packageContent = [{ id: 1, name: "First package",  date: "01/02/2003", author: "Thalos", views: 1337, downloads: 256, short_description: "The veefhfffewnfefewf ef eufew fuew feuw feu. fewh fry first package.", long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis vel nisl in feugiat. Integer hendrerit felis sollicitudin eros feugiat, ac efficitur dui luctus. Morbi pellentesque risus eu hendrerit tincidunt. Sed tempus dolor at finibus commodo. Integer mi est, gravida quis enim ac, vehicula dignissim urna. Duis aliquet, neque eu rhoncus egestas, mi lectus varius eros, eget luctus libero velit imperdiet sem. Praesent fermentum, metus vel iaculis eleifend, lorem turpis auctor metus, rutrum porttitor mi purus vel massa. Nulla facilisi. Duis euismod massa arcu, vel fermentum sem vulputate ac. Maecenas imperdiet tincidunt congue. Pellentesque sit amet congue nulla. Vestibulum ut dignissim lectus. Duis id mollis leo." }]
  return (
    <>
      <Container className={classes.root}>
        <Grid container grid={1}>
          <Grid item xs={12}>
          { packageContent.map((p, index) => <PackageViewItem key={index} package={p} />) }
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PackageView;
