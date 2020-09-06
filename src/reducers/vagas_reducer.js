export default function vagasReducer(state = [], action) {
   switch(action.type) {
     case 'SET_VAGAS':
      return action.payload
     default:
      return state
   }
}
