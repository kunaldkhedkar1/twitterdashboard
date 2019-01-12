import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Tweet from './Tweet';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  item: {
    padding: '0'
  },
}
function ListItemTweet(props) {
    var {key, classes, ...otherProps} = props;
  return (<ListItem className={classes.item} key={key}> <Tweet {...otherProps}/> </ListItem>);
}
export default withStyles(styles)(ListItemTweet)