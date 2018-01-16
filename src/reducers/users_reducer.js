export default function users_reducer(state = {name: '', goals: []}, action){
  switch (action.type){
    case 'GET_USER':
      return {...state, name: action.name, goals: action.goals}
    default:
      return state
  }
}
