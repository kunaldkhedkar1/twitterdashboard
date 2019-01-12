import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import ListItemTweet from "./ListItemTweet";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";
import SettingModal from "./settingModal";
const styles = theme => ({
  main: {
    borderRadius: "2px",
    border: "1px solid rgba(15,70,100,.12)"
  },
  root: {
    width: "100%",
    padding: 0,
    backgroundColor: "whitesmoke",
    position: "relative",
    overflow: "auto",
    maxHeight: "84vh"
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    padding: 8,
    backgroundColor: theme.palette.background.paper,
    borderBottom: "1px solid rgba(15,70,100,.12)",
    borderRadius: "2px",
    border: "1px solid rgba(15,70,100,.12)"
  },
  username: {
    color: "rgb(43, 123, 185)",
    fontSize: 14
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  icon: {
    float: "right",
    paddingTop: 0
  }
});
class Tweets extends Component {
  state = {
    tweets: [],
    isLoading: false,
    open: false
  };
  onDragStart(e, user) {
    e.dataTransfer.setData("id", user);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(ev) {
    let source = ev.dataTransfer.getData("id");
    let target = this.props.username;
    console.log("sourece-target", source, target);
    this.props.reorder(source, target);
  }
  openModal(e) {
    this.setState({ open: true }, () => {});
  }
  render() {
    var { classes, username, tweets } = this.props;
    return (
      <div
        className={classes.main}
        draggable
        onDragStart={e => this.onDragStart(e, username)}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop.bind(this)}
      >
        <SettingModal username={username} open={this.state.open} />
        <Typography className={classes.title}>
          <Icon
            className={classes.icon}
            onClick={this.openModal.bind(this)}
            fontSize="fonSize"
          >
            settings
          </Icon>
          Tweets by <span className={classes.username}>@{username}</span>
        </Typography>

        <List className={classes.root}>
          {tweets.map(tweet => (
            <ListItemTweet key={tweet.id} data={tweet} />
          ))}
        </List>
      </div>
    );
  }
}

Tweets.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Tweets);
