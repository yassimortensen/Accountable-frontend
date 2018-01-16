export function postGoal(goalData) {
  // debugger
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(goalData)
    }

    fetch('http://localhost:3000/api/v1/goals', options)
    .then(res => res.json())
    .then((goal)=>{
      dispatch({type: "ADD_GOAL", goal: goal})
    })

  }

}
