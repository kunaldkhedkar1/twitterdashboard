import React from 'react';
import {connect} from 'react-redux';
import Header from '../presentational/header'
//TODO add proptypes and correct mapstatetoprops
function mapStateToProps(){
  return {}
}
function mapDispatchToProps(dispatch){
  return {
    testSaga : ()=>dispatch({type:'TEST'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);