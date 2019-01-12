import { REQUEST_TWEETS, FETCH_SUCCESS, SWAP_ORDER,  } from "../actions";
function getUserIndex(source, element)
{
  return source === element.username
}
export default function tweets(state = [], action) {
  switch (action.type) {
    case FETCH_SUCCESS:
    console.log('reducer payload',action.payload)
      return action.payload
    case SWAP_ORDER:
    // TODO: must refractor this this about tweets should be obj or arr
        let { source, target} = action.payload;
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
