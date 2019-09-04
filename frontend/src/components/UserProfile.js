import React from 'react'
import '../UserProfile.css'

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    editing: false,
    name: (this.props.user.first_name + " " + this.props.user.last_name),
    username: this.props.user.username,
    location: this.props.user.location,
    program: this.props.user.program,
    mod: this.props.user.current_mod
   }
 };

  handleClick = () => {
    this.setState({ editing: true })
  }

  handleUserEdit = (e) => {
    e.persist();
    this.setState({ editing: false })
    this.props.handleUserEdit(e)
  }

  render() {

    if (this.state.editing) {
      return (
        <div id="profile">
          <h1>User Profile</h1>
          <div className="profile-list">
            <ul id="name"> Name:
              <h4 contentEditable>{this.state.name}</h4>
            </ul>
            <ul id="username"> User Name:
              <h4 contentEditable>{this.state.username}</h4>
            </ul>
            <ul id="location"> Location:
              <h4 contentEditable>{this.state.location}</h4>
            </ul>
            <ul id="program"> Program:
              <h4 contentEditable>{this.state.program}</h4>
            </ul>
            <ul id="mod"> Mod #
              <h4 contentEditable>{this.state.mod}</h4>
            </ul>
            <button onClick={this.handleUserEdit}>Save Edit</button>
          </div>
        </div>
      )
    } else {
    return (
      <div id="profile">
        <h1>User Profile</h1>
        <div className="profile-list">
          <ul>Name: {this.state.name}</ul>
          <ul>User Name: {this.state.username}</ul>
          <ul>Location: {this.state.location}</ul>
          <ul>Program: {this.state.program}</ul>
          <ul>Mod: {this.state.mod}</ul>
          <button onClick={this.handleClick}>Edit Profile</button>
        </div>
      </div>
    )}
  };
}
