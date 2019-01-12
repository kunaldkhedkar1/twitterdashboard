import { REQUEST_TWEETS, FETCH_SUCCESS, SWAP_ORDER, REORDER_TWEETS,  } from "../actions";
function getUserIndex(source, element)
{
  return source === element.username
}
export default function tweets(state = [], action) {
  switch (action.type) {
    case FETCH_SUCCESS:
    console.log('reducer payload',action.payload)
      return action.payload
    case REORDER_TWEETS:
    // TODO: must refractor this this about tweets should be obj or arr
        let order = action.payload;
        console.log('order in reorder tweets', order)
        let sortedTweets =  state.sort((a,b)=>{
            return order.indexOf(a.username) > order.indexOf(b.username) ? 1 : -1;
        })
        console.log('sortedTweets', sortedTweets)
        return sortedTweets
        console.log('oldstate',state)
        let newState = state.map((item)=>Object.assign({}, item))
        let sourceIndex = state.findIndex(getUserIndex.bind(null, source));
        let targetIndex = state.findIndex(getUserIndex.bind(null, target));
        let temp= newState[sourceIndex];
        newState[sourceIndex]=newState[targetIndex]
        newState[targetIndex]=temp;
        console.log('si',sourceIndex)
        console.log('newstate', newState)
        return newState;
    default:
      return state;
  }
}
