import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  let history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab onClick={props.onClick} color={props.color} aria-label='add'>
        <AddIcon />
      </Fab>
       {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
       <Fab variant="extended" onClick={()=>{alert('Add Profile Information First.')}}>
        <NavigationIcon className={classes.extendedIcon} />
        Apply For Job
      </Fab>
      {/* <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>   */}
    </div>
  );
}