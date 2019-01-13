import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Icon, Tooltip, SvgIcon } from '@material-ui/core';

const styles = theme =>{
  let bgColor = theme.palette.type === 'dark' ? 'black' :'#2196f3'
  return ({
   root: {
    flexGrow: 1,
    backgroundColor: bgColor
    },
  grow: {
    flexGrow: 1,
    marginLeft: 15
  },
})
};

function Header(props) {
  const { classes, reloadTweets, toggleTheme, theme } = props;
  return (
    <div className={classes.root.dark}>
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
          <SvgIcon width="24" height="24" viewBox="0 0 24 24" onClick={toggleTheme}>
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
          </SvgIcon>
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