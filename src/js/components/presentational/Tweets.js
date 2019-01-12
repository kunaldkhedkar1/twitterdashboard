import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import ListItemTweet from "./ListItemTweet";
import Typography from "@material-ui/core/Typography";
import {  Icon } from "@material-ui/core";
import SettingModal from './settingModal'
const styles = theme => ({
  main:{
    borderRadius: "2px",
    border: "1px solid rgba(15,70,100,.12)"
  },
  root: {
    width: "100%",
    padding: 0,
    backgroundColor: "whitesmoke",
    position: "relative",
    overflow: "auto",
    maxHeight: '84vh'
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    padding: 8,
    backgroundColor: theme.palette.background.paper,
    borderBottom: "1px solid rgba(15,70,100,.12)",
    borderRadius: "2px",
    border: "1px solid rgba(15,70,100,.12)",
    // marginBottom: '7px'
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
    // color:'black',
    float: 'right',
    paddingTop: 0,
    // backgroundColor:'white'
  },
});
class Tweets extends Component {
  state = {
    tweets: [],
    isLoading: false,
    open:false
  }
  onDragStart(e, user) {
    e.dataTransfer.setData("id", user);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(ev,user) {
     let source = ev.dataTransfer.getData("id");
     let target = this.props.username;
     console.log('sourece-target',source, target)
     this.props.reorder(source, target)
  }
  openModal(e){
    this.setState({open:true},()=>{
      
    })
  }
  componentDidMount() {
    // this.setState({isLoading:true})
    // axios.get('http://localhost:7890/1.1/statuses/user_timeline.json',{
    //   params: {
    //     count: 30,
    //     screen_name: this.props.user
    //   }
    // })
    // .then(resp => {
    //   this.setState({tweets: resp.data},()=>{ this.setState({isLoading:false})})
    // })
  }
  render() {
    var { classes, username, tweets } = this.props;
    console.log('tweets in Tweets',tweets)

    // if(isLoading)
    //  return <LinearProgress />
    return (
      <div className={classes.main}
      draggable
      onDragStart={e => this.onDragStart(e, username)}
      onDragOver={this.onDragOver}
      onDrop={this.onDrop.bind(this)}>
      <SettingModal username={username} open={this.state.open}/>
      <Typography 
        className={classes.title}
       >
        <Icon className={classes.icon} onClick={this.openModal.bind(this)} color='disabled' fontSize="large">
        settings_applications
        </Icon>
          Tweets by <span className={classes.username}>@{username}</span>
          
        </Typography>
        
      <List
        className={classes.root}
      >
    
        {tweets.map(tweet => (
          <ListItemTweet key={tweet.id} data={tweet} />
        ))}
      </List>
      </div>
    );
  }
}
export default withStyles(styles)(Tweets);
