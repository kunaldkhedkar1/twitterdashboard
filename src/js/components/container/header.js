import React from 'react';
import { connect } from 'react-redux';
import Header from '../presentational/header'
import { FETCH_ALL } from '../../actions'
//TODO add proptypes and correct mapstatetoprops  add lastupdated time
function mapStateToProps() {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {
    reloadTweets: () => dispatch({ type: FETCH_ALL })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);