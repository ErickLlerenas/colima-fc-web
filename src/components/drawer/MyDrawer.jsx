import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ItemList from './ItemsList';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../../assets/bg.jpeg';

const useStyles = makeStyles(() => ({

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 275,
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) , rgba(0, 0, 0, 0.4)), url(' + BackgroundImage + ')'
  }
}));

export default function MyDrawer({index}) {

  const classes = useStyles();

  return (
    <Drawer
      className="drawer"
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper),
      }}
    >
      <h1>Colima FC</h1>
      <Divider variant="middle" style={{ backgroundColor: 'white', height: 0.1 }} />
      <List className="white"><ItemList index={index}/></List>
    </Drawer>
  );
}