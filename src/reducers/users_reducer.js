export default function users_reducer(state = {name: '', goals: [], selected_goal:undefined}, action){
  switch (action.type){
    case 'GET_USER':
      return {...state, name: action.name, goals: action.goals}
    case 'ADD_GOAL':
      return {...state, goals: [...state.goals, action.goal]}
    case 'SELECT_GOAL':
      return{...state, selected_goal: action.goal}
    case 'ADD_LOG':
      // debugger
      return {...state, goals: state.goals.map(goal => {
        if (goal.id === action.goal.id){
          return action.goal
        } else {
          return goal
        }
      })}
      // return {...state, selected_goal: [...state.selected_goal.logs, action.log]}
    default:
      return state
  }
}
