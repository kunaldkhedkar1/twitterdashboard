import { FETCH_SUCCESS, REORDER_TWEETS } from "../actions";

export default function tweets(state = [], action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      console.log("reducer payload", action.payload);
      return action.payload;
    case REORDER_TWEETS:
      let order = action.payload;
      let newState = state.map(item => Object.assign({}, item));
      let sortedTweets = newState.sort((a, b) => {
        return order.indexOf(a.username) > order.indexOf(b.username) ? 1 : -1;
      });
      return sortedTweets;
    default:
      return state;
  }
}
