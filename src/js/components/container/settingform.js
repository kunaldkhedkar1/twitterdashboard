import React from 'react'
import {connect} from 'react-redux'
import SettingForm from '../presentational/settingform'
import {SAVE_TWEETS_SETTINGS, UPDATE_AND_RELOAD} from '../../actions'

function mapStateToProps(state){
    //TODO change name settingUser
    var {settingUser} = state;
    return {}
}

function mapDispatchToProps(dispatch,props){
    return {
        saveSetting : (username, options)=>{
            let payload = {}
            payload[username]={options}
            dispatch({type:UPDATE_AND_RELOAD,payload})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingForm)