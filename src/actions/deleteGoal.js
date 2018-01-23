export function deleteGoal(goalId, history) {
  // debugger
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(goalId)
    }
    return fetch(`http://localhost:3000/api/v1/goals/${goalId}`, options)
    .then(res => res.json())
    .then((allGoals)=>{
      dispatch({type: "LOGIN", goal: allGoals})
    })
  }
}
