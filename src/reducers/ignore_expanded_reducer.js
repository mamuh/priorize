export default function ignoreExpandedReducer(state = false, action) {
   switch(action.type) {
     case 'TOGGLE_IGNORE':
      return action.payload
     default:
      return state
   }
}
