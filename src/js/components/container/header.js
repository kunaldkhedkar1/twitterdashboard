import React from 'react';
import { connect } from 'react-redux';
import Header from '../presentational/header'
import { FETCH_ALL, TOGGLE_THEME } from '../../actions'
//TODO add proptypes and correct mapstatetoprops  add lastupdated time
function mapStateToProps(state) {
  let theme = state.layout.theme
  return {theme}
}
function mapDispatchToProps(dispatch) {
  return {
    reloadTweets: () => dispatch({ type: FETCH_ALL }),
    toggleTheme: () => dispatch({type: TOGGLE_THEME })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);