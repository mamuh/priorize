export default function expandedReducer(state = false, action) {
   switch(action.type) {
     case 'TOGGLE_EXPANDED':
      return !state
     default:
      return state
   }
}
