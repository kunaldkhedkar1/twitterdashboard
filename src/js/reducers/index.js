import {combineReducers} from 'redux';
import layout from './layout'
import tweets from './tweets'
import loading from './loading'
import accounts from './accounts'


export default combineReducers({
    layout,
    tweets,
    loading,
    accounts
})