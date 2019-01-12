import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from '../presentational/Layout'
import Tweets from '../presentational/Tweets'
import { CircularProgress } from '@material-ui/core';
import { REORDER } from '../../actions';
//TODO correct mapstatetoprops
function mapStateToProps(state) {
    return Object.assign({}, state);
}
function mapDispatchToProps(dispatch) {
    return {
        fetchAll: () => dispatch({ type: 'FETCH_ALL' }),
        reorder: (source, target) => dispatch({ type: REORDER, payload: { source, target } })
    }
}
class LayoutContainer extends Component {

    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        var { layout, tweets, loading } = this.props;
        if (loading) return <CircularProgress style={{ margin: 'auto' }} />
        // if (layout.options && layout.options.order && Array.isArray(layout.options.order)) {
        //     let { order } = layout.options;
        //     var sortedTweets = tweets.sort((a, b) => {
        //         return order.indexOf(a.username) > order.indexOf(b.username)
        //     })
        // }
        var tweetsArray = tweets
        console.log('tweets in main layout', tweets)
        if (!Array.isArray(tweetsArray)) tweetsArray = [];
           console.log('twtarr',tweetsArray)
        return (
            <Layout>
                {tweetsArray.map((tweetObj,index) => { console.log('tweet in layout render', tweetObj.username,index);return <Tweets username={tweetObj.username} key={index} tweets={tweetObj.tweets} 
                reorder={this.props.reorder} /> })}
            </Layout>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
