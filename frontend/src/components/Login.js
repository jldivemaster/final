import React from 'react'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
import UploadScreen from './UploadScreen'

class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 handleClick(event){
 // var apiBaseUrl = "http://localhost:4000/api/";
 // var self = this;
 // var payload={
 // "email":this.state.username,
 // "password":this.state.password
 // }
 // fetch(apiBaseUrl+'login', payload)
 // .then(function (response) {
 // console.log(response);
 // if(response.data.code == 200){
 console.log("Login successfull");
 var uploadScreen=[];
 uploadScreen.push(<UploadScreen appContext={this.props.appContext}/>)
 this.props.appContext.setState({loginPage:[], uploadScreen:uploadScreen})
 // }
 // else if(response.data.code == 204){
 // console.log("Username password do not match");
 // alert("username password do not match")
 // }
 // else{
 // console.log("Username does not exists");
 // alert("Username does not exist");
 // }
 // })
 // .catch(function (error) {
 // console.log(error);
 // });
 }

render() {
    return (
      <div>

          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hinttext="Enter your Username"
             floatinglabeltext="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hinttext="Enter your Password"
               floatinglabeltext="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button variant="contained" primary="true" style={style} onClick={(event) => this.handleClick(event)}>Submit</Button>
         </div>

      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;

// Line 28: if(response.data.code == 200){
