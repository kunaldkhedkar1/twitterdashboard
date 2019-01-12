import { SWAP_ORDER } from "../actions";
export default function layout(state = {}, action) {
  console.log('here in layout reducer')
  switch (action.type) {

    case SWAP_ORDER:
        
        return newState;
    default:
      return state;
  }
}
