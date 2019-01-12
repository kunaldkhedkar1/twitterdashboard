import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Icon, Tooltip } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#2196f3'
  },
  grow: {
    flexGrow: 1,
    marginLeft: 15
  },
};

function Header(props) {
  const { classes, reloadTweets } = props;
  return (
    <div className={classes.root}>
      <AppBar color='default' position="static">
        <Toolbar>
          <Tooltip title="Reload Tweets">
            <Icon onClick={reloadTweets}>
              autorenew
          </Icon>
          </Tooltip>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Tweets Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  reloadTweets: PropTypes.func.isRequired
};

export default withStyles(styles)(Header)