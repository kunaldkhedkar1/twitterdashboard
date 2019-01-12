import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from '../presentational/Layout'
import Tweets from '../presentational/Tweets'
import { CircularProgress } from '@material-ui/core';
import { REORDER } from '../../actions';

function mapStateToProps(state) {
    let { tweets, loading } = state;
    return { tweets, loading }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAll: () => dispatch({ type: 'FETCH_ALL' }),
        reorder: (source, target) => dispatch({ type: REORDER, payload: { source, target } })
    }
}
const loaderStyle = {
    position: 'fixed',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '2em',
    width: '2em'
}

class LayoutContainer extends Component {

    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        var { tweets, loading } = this.props;
        if (loading) return <CircularProgress style={loaderStyle} />
        if (!Array.isArray(tweets)) tweets = [];
        return (
            <Layout col={3}>
                {tweets.map((tweetObj, index) => {
                    return <Tweets username={tweetObj.username} key={index} tweets={tweetObj.tweets}
                        reorder={this.props.reorder} />
                })}
            </Layout>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
