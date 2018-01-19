export function getGoalData(goalId, history) {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/goals/${goalId}`)
      .then(res => res.json())
      .then(goal =>{
        dispatch({ type: "SELECT_GOAL", goal })
        history.push(`/goal/${goalId}/show`)
      });
  };
}
