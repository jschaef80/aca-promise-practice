import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { setUsers } from './actions/'
import { thunk } from 'redux-thunk'


class Users extends Component {

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.props.setUsers(users))
  }

  render() {
    console.log(this.props.users)
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {this.props.users.map((user, index) => (
            <p key={index}>{user.name}</p>
          ))}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsers(users))
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)