import React from 'react'
import '../UserProfile.css'

export default class UserProfile extends React.Component {

  render() {
    return (
      <div id="profile">
        <h1>User Profile</h1>
        <div className="profile-list">
          <ul>{this.props.user.name}</ul>
          <ul>Email: {this.props.user.email}</ul>
          <ul>Mod: {this.props.user.current_mod}</ul>
          <ul>Location: {this.props.user.location}</ul>
          <ul>Add Edit/Delete Buttons</ul>
        </div>
      </div>
    )
  }
}
