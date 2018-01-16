export default function users_reducer(state = {name: '', goals: []}, action){
  switch (action.type){
    case 'GET_USER':
      return {...state, name: action.name, goals: action.goals}
    case 'ADD_GOAL':
      return {...state, goals: [...state.goals, action.goal]}
    default:
      return state
  }
}
