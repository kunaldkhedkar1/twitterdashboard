import { delay } from 'redux-saga'
import { put, takeLatest, takeEvery, select, all } from 'redux-saga/effects'
import {LOADING, FETCH_ALL, FETCH_SUCCESS, FETCH_FAILURE, UPDATE_AND_RELOAD, SAVE_TWEETS_SETTINGS} from '../actions'
import {accounts} from './selector'
import { func } from 'prop-types';
const api = require('./api')
function* fetchAllTweets() {
  yield put({ type: LOADING});
  var twitterAccounts = yield select(accounts)
  const data = yield api.fetchAll(twitterAccounts)
  if(data&&!data.error)
  yield put({ type: FETCH_SUCCESS, payload: data });
  else
  yield put({ type: FETCH_FAILURE});
}

function* updateAndReload(action){
  yield put({type:SAVE_TWEETS_SETTINGS, payload: action.payload})
  yield put({type:FETCH_ALL})
}
function* reorderTweets(action){
  
}

export default function* actionWatcher() {
  
  yield all([takeLatest(FETCH_ALL, fetchAllTweets), takeEvery(UPDATE_AND_RELOAD, updateAndReload)]);
}
