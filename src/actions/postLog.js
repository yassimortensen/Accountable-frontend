export function postLog(logData) {
  // debugger
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(logData)
    }

    fetch('http://localhost:3000/api/v1/logs', options)
    .then(res => res.json())
    .then((goal)=>{
      dispatch({type: "ADD_LOG", goal: goal})
    })

  }

}
