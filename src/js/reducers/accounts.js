import { SAVE_TWEETS_SETTINGS } from "../actions";
export default function tweets(state = {}, action) {
  switch (action.type) {
    case SAVE_TWEETS_SETTINGS:
      return Object.assign({}, state, action.payload)

    default:
      return state;
  }
}
