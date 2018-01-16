export default function users_reducer(state = {name: ''}, action){
  switch (action.type){
    case 'GET_USER':
      return {...state, name: action.data}
    default:
      return state
  }
}
