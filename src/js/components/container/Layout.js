import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from '../presentational/Layout'
import Tweets from '../presentational/Tweets'
import { CircularProgress } from '@material-ui/core';
//TODO correct mapstatetoprops
function mapStateToProps(state) {
    return Object.assign({}, state);
}
function mapDispatchToProps(dispatch) {
    return {
        fetchAll: () => dispatch({ type: 'FETCH_ALL' }),
        swapOrder: (source, target) => dispatch({ type: 'SWAP_ORDER', payload: { source, target } })
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
        if (!Array.isArray(tweetsArray)) tweetsArray = [];

        return (
            <Layout>
                {tweetsArray.map((tweetObj) => { return <Tweets username={tweetObj.username} tweets={tweetObj.tweets} 
                swapOrder={this.props.swapOrder} /> })}
            </Layout>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
