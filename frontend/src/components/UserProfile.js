import React from 'react'
import '../UserProfile.css'
import { RIEInput, RIETextArea } from 'riek'
import _ from 'lodash'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    editing: false,
    firstname: this.props.user.first_name,
    lastname: this.props.user.last_name,
    username: this.props.user.username,
    location: this.props.user.location,
    program: this.props.user.program,
    mod: this.props.user.current_mod
   }
 };

 handleChange = name => (e) => {
   console.log('change', e)
    this.setState({ [name]: e[name] })
 }

 handleClick = () => {
   this.setState({ editing: !this.state.editing })
 };

 handleUserEdit = (e) => {
   e.persist();
  this.props.handleUserEdit(e)
   this.setState({ editing: false })
 }

 setValue = (value) => {
   if(value == null) {
     return "  none"
   } else {
     return "  " + value
   }
 }


  render() {
    // console.log(this.props.user)
    if (this.state.editing) {
      return (
        <div id="profile">
          <h2>User Profile</h2>
          <div className="profile-list">
            <ul id="firstname"> First Name:
              <input type="text" size='10' className='input' name='firstname' value={this.state.firstname} onChange={this.handleChange('firstname')} />
            </ul>
            <ul id="lastname"> Last Name:
              <input type='text' className='input' size='10' name='lastname' value={this.state.lastname} onChange={this.handleChange('lastname')} />
            </ul>
            <ul id="username"> User Name:
              <input size='10' type="text" className='input' name='username' value={this.state.username} onChange={this.handleChange('username')} />
            </ul>
            <ul id="location"> Location:
              <input size='10' type="text" className='input' name='location' value={this.state.location} onChange={this.handleChange('location')} />
            </ul>
            <ul id="program"> Program:
              <input size='20' type="text" className='input' name='program' value={this.state.program} onChange={this.handleChange('program')} />
            </ul>
            <ul id="mod"> Mod #
              <input type="text" size='2' className='input' name='mod' value={this.state.mod} onChange={this.handleChange('mod')} />
            </ul>

            <Button className='profile-btn' variant="contained" onClick={this.handleUserEdit}>Save Edit</Button>

            <Button className='profile-btn' variant="contained" onClick={this.handleClick}>Cancel Edit</Button>

          </div>
        </div>
      )
    } else {
    return (
      <div id="profile">
        <h2>User Profile</h2>
        <div className="profile-list">
          <ul>Name: <p>{this.state.firstname + " " + this.state.lastname}</p></ul>
          <ul>User Name: {this.state.username}</ul>
          <ul>Location: {this.state.location}</ul>
          <ul>Program: {this.state.program}</ul>
          <ul>Mod: {this.state.mod}</ul>
          <Button className='profile-btn' variant="contained" onClick={this.handleClick}>Edit Profile</Button>
        </div>
      </div>
    )}
  }
}

// <h4 contentEditable onChange={this.handleChange('fullname')}>{this.state.fullName}</h4>
// <h4 contentEditable onChange={this.handleChange('username')}>{this.state.username}</h4>
// <h4 contentEditable onChange={this.handleChange('location')}>{this.state.location}</h4>
// <h4 contentEditable onChange={this.handleChange('program')}>{this.state.program}</h4>
// <h4 contentEditable onChange={this.handleChange('mod')}>{this.state.mod}</h4>
