import { LAYOUT_REORDER, TOGGLE_THEME } from "../actions";

export default function layout(state = {}, action) {
  switch (action.type) {

    case LAYOUT_REORDER:
      let { source, target } = action.payload;
      let sourceIndex = state.options.order.indexOf(source);
      let targetIndex = state.options.order.indexOf(target);
      let order = state.options.order.map((item) => item);
      order.move(sourceIndex, targetIndex);
      let { options } = state;
      options.order = order
      return Object.assign({}, state, { options })

    case TOGGLE_THEME :
       let theme = state.theme === 'dark' ? 'light' :'dark'
       return Object.assign({},state,{theme})
    default:
      return state;
  }
}
