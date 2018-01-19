import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
import { Route, Switch, withRouter } from 'react-router-dom';

import NavBar from './NavBar'
import LogForm from './LogForm'
import LogFormBinary from './LogFormBinary'
import GoalForm from './GoalForm'
import ShowGoalContainer from './ShowGoalContainer'
import GoalContainer from './GoalContainer'

class HomePage extends Component {

  // constructor(){
  //   super()
  //
  //   this.state= {
  //     color: 'black'
  //   }
  // }

  render() {
    const form = () => {
      if (this.props.selected_goal.binary === true){
        return (<LogFormBinary />)
      } else {
        return (<LogForm />)
      }
    }

    return (
      <div className='App'>
        <div className="navbar">
          <NavBar name={this.props.name}/>
        </div>
        <Switch>
          <Route exact path='/goals' render={() => <GoalContainer />} />
          <Route exact path='/add/goal' render={() => <GoalForm />} />
          <Route exact path='/goal/:id/add/log' render={form} />
          <Route exact path='/goal/:id/show' render={(props) => <ShowGoalContainer {...props} goal={this.props.selected_goal} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}

export default withRouter(connect(mapStateToProps, null)(HomePage));
