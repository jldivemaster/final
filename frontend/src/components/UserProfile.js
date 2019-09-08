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

 // const classes = {
 //   profileBtn: {
 //     opacity: '0.5'
 //   }
 // };


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
              <RIEInput name='firstname' value={this.setValue(this.state.firstname)} change={this.handleChange('firstname')} propName='firstname' validate={_.isString} />
            </ul>
            <ul id="lastname"> Last Name:
              <RIEInput name='lastname' value={this.setValue(this.state.lastname)} change={this.handleChange('lastname')} propName='lastname' validate={_.isString} />
            </ul>
            <ul id="username"> User Name:
              <RIEInput name='username' value={this.setValue(this.state.username)} change={this.handleChange('username')} propName='username' validate={_.isString} />
            </ul>
            <ul id="location"> Location:
              <RIEInput name='location' value={this.setValue(this.state.location)} change={this.handleChange('location')} propName='location' validate={_.isString} />
            </ul>
            <ul id="program"> Program:
              <RIEInput name='program' value={this.setValue(this.state.program)} change={this.handleChange('program')} propName='program' validate={_.isString} />
            </ul>
            <ul id="mod"> Mod #
              <RIEInput name='mod' value={this.setValue(this.state.mod)} change={this.handleChange('mod')} propName='mod' validate={_.isString} />
            </ul>
            <Button variant="contained" onClick={this.handleUserEdit}>Save Edit</Button>
          </div>
        </div>
      )
    } else {
    return (
      <div id="profile">
        <h2>User Profile</h2>
        <div className="profile-list">
          <ul>Name: {this.state.firstname + " " + this.state.lastname}</ul>
          <ul>User Name: {this.state.username}</ul>
          <ul>Location: {this.state.location}</ul>
          <ul>Program: {this.state.program}</ul>
          <ul>Mod: {this.state.mod}</ul>
          <Button variant="contained" onClick={this.handleClick}>Edit Profile</Button>
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
