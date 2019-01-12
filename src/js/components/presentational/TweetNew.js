import React, {Component} from 'react'
export default class TwitterTweetEmbed extends Component {
    componentDidMount(){
        var that = this;
        window.twttr.widgets.createTweet(
            '20',
            that.refs.tweetdiv,
            {
              theme: 'light'
            }
          ).then((resp)=>{console.log('tweet added',resp);});
    }
    render(){
        return (<div ref='tweetdiv'></div>)
    }
}