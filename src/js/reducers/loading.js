import { LOADING, FETCH_SUCCESS } from "../actions";
export default function loading(state = [], action) {
  switch (action.type) {
    case LOADING:
      return true;
      case FETCH_SUCCESS:
      return false;

    default:
      return state;
  }
}
