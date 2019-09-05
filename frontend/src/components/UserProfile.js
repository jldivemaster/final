import React from 'react'
import '../UserProfile.css'
import { RIEToggle, RIEInput, RIETextArea, RIETags, RIESelect } from 'riek'
import _ from 'lodash'

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

 // const [values, setValues] = React.useState({
 //   username: props.user.username,
 //   fullName: props.user.first_name + " " + props.user.last_name,
 //   location: props.user.location,
 //   program: props.user.program,
 //   mod: props.user.current_mod,
 //   editing: false
 // });
 //
 //  const handleClick = () => {
 //    setValues({ ...values, editing: true })
 //    // this.props.startUserEdit()
 //  };
 //
 //  const handleChange = name => (e) => {
 //    setValues({...values, [name]: e.target.value })
 //  }
 //
 //  const handleUserEdit = (e) => {
 //    e.persist();
 //    props.handleUserEdit(e)
 //    setValues({ ...values, editing: false })
 //  }

 handleChange = name => (e) => {
   // console.log(name, e[name])
    this.setState({ [name]: e[name] })
 }

 handleClick = () => {
   this.setState({ editing: true })
 };

 handleUserEdit = (e) => {
   e.persist();
  this.props.handleUserEdit(e)
   this.setState({ editing: false })
 }


  render() {
    // console.log(this.props.user)
    if (this.state.editing) {
      return (
        <div id="profile">
          <h1>User Profile</h1>
          <div className="profile-list">
            <ul id="firstname"> First Name:
              <RIEInput name='firstname' value={this.state.firstname} change={this.handleChange('firstname')} propName='firstname' validate={_.isString} />
            </ul>
            <ul id="lastname"> Last Name:
              <RIEInput name='lastname' value={this.state.lastname} change={this.handleChange('lastname')} propName='lastname' validate={_.isString} />
            </ul>
            <ul id="username"> User Name:
              <RIEInput name='username' value={this.state.username} change={this.handleChange('username')} propName='username' validate={_.isString} />
            </ul>
            <ul id="location"> Location:
              <RIEInput name='location' value={this.state.location} change={this.handleChange('location')} propName='location' validate={_.isString} />
            </ul>
            <ul id="program"> Program:
              <RIEInput name='program' value={this.state.program} change={this.handleChange('program')} propName='program' validate={_.isString} />
            </ul>
            <ul id="mod"> Mod #
              <RIEInput name='mod' value={this.state.mod} change={this.handleChange('mod')} propName='mod' validate={_.isString} />
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
          <ul>Name: {this.state.firstname + " " + this.state.lastname}</ul>
          <ul>User Name: {this.state.username}</ul>
          <ul>Location: {this.state.location}</ul>
          <ul>Program: {this.state.program}</ul>
          <ul>Mod: {this.state.mod}</ul>
          <button onClick={this.handleClick}>Edit Profile</button>
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
