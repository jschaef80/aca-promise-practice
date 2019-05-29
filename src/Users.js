import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { getUsersFromAPI } from './actions/'


class Users extends Component {

  getUsers = () => {
    this.props.setUsersFromAPI()
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
        {this.props.users.map((user, i) => (
          <div key={i}>
            <hr/>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <hr/>
          </div>
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
    setUsersFromAPI: () => dispatch(getUsersFromAPI())
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)