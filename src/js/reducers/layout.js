import { LAYOUT_REORDER } from "../actions";
Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};
export default function layout(state = {}, action) {
  switch (action.type) {

    case LAYOUT_REORDER:
        let { source, target} = action.payload;
        let sourceIndex = state.options.order.indexOf(source);
        let targetIndex = state.options.order.indexOf(target);
        console.log('source and target', source , target)
        console.log('order before layout reorder', state.options.order)
        let order =  state.options.order.map((item)=>item);
        order.move(sourceIndex, targetIndex);
        console.log('order after layout reorder', order)
        let {options} = state;
        options.order=order
        return Object.assign({}, state,{options})
    default:
      return state;
  }
}
