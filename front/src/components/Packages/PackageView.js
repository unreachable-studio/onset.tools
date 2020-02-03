import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from "@material-ui/core";

import PackageViewItem from './PackageViewItem';
import PackageViewAuthor from './PackageViewAuthors';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}));

const PackageView = (props) => {

  // TEMPORAIREMENT INUTILISABLE 
  const { match } = props;
  let {id} = match.params;

  const classes = useStyles();

  // VARIABLE DE TEST
  const packageContent = [{ id: 1, name: "First package",  date: "01/02/2003", authors: [{ id: 42, pseudo: "bapmarty", postCount: 1485, role: "developper", logo: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b2/b2adcbd54d30d6c9eb0e87ae451b6ee08390deb7_medium.jpg"}, { id: 12, pseudo: "aguiot--", postCount: 140, role: "sysadmin", logo: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b2/b2adcbd54d30d6c9eb0e87ae451b6ee08390deb7_medium.jpg"}], views: 1337, downloads: 256, likes: 12354, short_description: "The veefhfffewnfefewf ef eufew fuew feuw feu. fewh fry first package.", long_description: `# Welcome to StackEdit!

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
