import { delay } from 'redux-saga'
import { put, takeLatest, takeEvery, select, all } from 'redux-saga/effects'
import { LOADING, FETCH_ALL, FETCH_SUCCESS, FETCH_FAILURE, UPDATE_AND_RELOAD, SAVE_TWEETS_SETTINGS, LAYOUT_REORDER, REORDER_TWEETS, REORDER } from '../actions'
import { accounts, layout } from './selector'
const api = require('./api')
function* fetchAllTweets() {
  yield put({ type: LOADING });
  var twitterAccounts = yield select(accounts)
  const data = yield api.fetchAll(twitterAccounts)
  if (data && !data.error){
    yield put({ type: FETCH_SUCCESS, payload: data });
    let layoutState = yield select(layout)
    yield put({ type: REORDER_TWEETS, payload: layoutState.options.order})
  }
  else
    yield put({ type: FETCH_FAILURE });
}

function* updateAndReload(action) {
  yield put({ type: SAVE_TWEETS_SETTINGS, payload: action.payload })
  yield put({ type: FETCH_ALL })
}

function* reorderTweets(action) {
  yield put({ type: LAYOUT_REORDER, payload: action.payload })
  let layoutState = yield select(layout)
  yield put({ type: REORDER_TWEETS, payload: layoutState.options.order})
}

export default function* actionWatcher() {

  yield all([takeLatest(FETCH_ALL, fetchAllTweets), takeEvery(UPDATE_AND_RELOAD, updateAndReload), takeEvery(REORDER, reorderTweets)]);
}
