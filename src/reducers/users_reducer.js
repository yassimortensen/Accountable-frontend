export default function users_reducer(state = {name: '', goals: [], selected_goal:undefined, dates: []}, action){
  switch (action.type){
    case 'LOGIN':
      return {...state, name: action.user.name, goals: action.user.goals, userId: action.user.id}
    case 'LOGOUT':
      return {...state, name: '', goals: [], selected_goal:undefined, dates: []}
    // case 'GET_USER':
    //   return {...state, name: action.name, goals: action.goals}
    case 'GET_WEEK':
      return {...state, dates: action.dates}
    case 'ADD_GOAL':
      return {...state, goals: [...state.goals, action.goal]}
    case 'SELECT_GOAL':
      return{...state, selected_goal: action.goal}
    case 'ADD_LOG':
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
