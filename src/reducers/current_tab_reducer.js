export default function currentTabReducer(state = "priorizadas", action) {
   switch(action.type) {
     case 'SET_TAB':
      return action.payload
     default:
      return state
   }
}
