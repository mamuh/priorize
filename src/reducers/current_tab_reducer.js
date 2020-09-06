export default function currentTabReducer(state = "PRIORIZADAS", action) {
   switch(action.type) {
     case 'SET_ACTIVE_TAB':
      return action.payload
     default:
      return state
   }
}
