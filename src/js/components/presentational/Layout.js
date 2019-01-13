import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SettingModal from './settingModal'

const styles = theme => {
    let backgroundColor = theme.palette.type === 'dark' ? 'black' : '#e6ecf0'
  return ({
  root: {
    flexGrow: 1,
  },

  paper: {
    height: 140,
    width: 100,
  },
  demo: {
    backgroundColor: backgroundColor

  },
  control: {
    padding: theme.spacing.unit * 2,
  },
})
};

class Layout extends React.Component {
  state = {
    spacing: '16',
    open : false,
    username : ''
  };

  // handleChange = key => (event, value) => {
  //   this.setState({
  //     [key]: value,
  //   });
  // };
  
  openModal = (username, e) => {
    this.setState({ open: true , username }, () => {});
  }

  render() {
    const { classes, children, col } = this.props;
    const { spacing } = this.state;
    let size = parseInt(12 / col);

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {React.Children.map(children, (child, index) => (
              <Grid key={index} xs={size} item>
                {React.cloneElement(child, {openModal: this.openModal})}
                {/* {child} */}
              </Grid>
            ))}
           <SettingModal username={this.state.username} open={this.state.open} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  col: PropTypes.number.isRequired
};

export default withStyles(styles)(Layout);
