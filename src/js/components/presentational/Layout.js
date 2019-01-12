import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    height: 140,
    width: 100,
  },
  demo: {
    backgroundColor: '#e6ecf0'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Layout extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes, children, col } = this.props;
    const { spacing } = this.state;
    let size = parseInt(12 / col);

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {children.map((child, index) => (
              <Grid key={index} xs={size} item>
                {child}
              </Grid>
            ))}
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
