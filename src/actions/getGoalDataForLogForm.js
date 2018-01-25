export function getGoalDataForLogForm(goalId, history) {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/goals/${goalId}`)
      .then(res => res.json())
      .then(goal =>{
        dispatch({ type: "SELECT_GOAL", goal })
        if (goal.binary === true) {
          history.push(`/goal/${goalId}/binary/add/log`)
        } else {
          history.push(`/goal/${goalId}/add/log`)
        }
      });
  };
}
