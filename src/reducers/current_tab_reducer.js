export default function currentTabReducer(state = "priorizadas", action) {
   switch(action.type) {
     case 'SET_ACTIVE_TAB':
      return action.payload
     default:
      return state
   }
}
