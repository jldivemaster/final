import React from 'react'
import { Button } from '@material-ui/core';

export default class SignIn extends React.Component {
  constructor(props) {
      super(props);
    this.state = { createAcct: false,
                    created: false }
  }

    handleSignIn = event => {
        event.preventDefault();
        console.log({target: event.target})
        this.props.handleLogin(event)
    }

    handleRegister = (e) => {
      e.preventDefault();
      {this.props.onCreateUser(e);}
      // fetch(user_url).then(resp => resp.json).then(user => )

      this.afterReg();

    }

    afterReg = () => {
      console.log('afterReg')
      this.setState({ created: !this.state.created })
      console.log(this.state)
    }

    toggleView = () => {
      this.setState({ createAcct: !this.state.createAcct })
    }

   render() {
     if(this.state.createAcct){
       return(
         <div>
             <form onSubmit={this.handleRegister}>
               <label htmlFor="username">username</label>
               <input type="username" id="username" name="username" /><br />
               <label htmlFor="first-name">First Name</label>
               <input type="text" id="first-name" name="first-name" /><br />
               <label htmlFor="last-name">Last Name</label>
               // ======
               <input type="last-name" id="last-name" name="last-name" /><br />

               <label htmlFor="password">Password</label>
               <input type="password" id="password" name="password" /><br />

               <label htmlFor="confirm-password">Confirm Password</label>
               <input type="confirm-password" id="confirm-password" name="confirm-password" /><br />
               <br />
               <input type="submit" value="Register"/>
             </form>
             <p>or</p>
             <Button variant="contained" color="primary" className="register-btn" onClick={this.toggleView}>
               Return to Sign In</Button>
         </div>
       )} else if((this.state.created) && !(this.state.createAcct)) {
       return(
         <div>
             <form onSubmit={this.handleSignIn}>
               <label htmlFor="username">username</label>
               <input type="username" id="username" name="username" /><br />
               <label htmlFor="password">Password</label>
               <input type="password" id="password" name="password" /><br />
               <br />
               <input type="submit" value="Sign In"/>
             </form>
             <p>Account successfully created! Sign In to continue.</p>
         </div>

      )} else {
        return(
          <div>
              <form onSubmit={this.handleSignIn}>
                <label htmlFor="username">username</label>
                <input type="username" id="username" name="username" /><br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" /><br />
                <br />
                <input type="submit" value="Sign In"/>
              </form>
              <p>or</p>
              <Button variant="contained" color="primary" className="register-btn" onClick={this.toggleView}>
                Create Account</Button>
          </div>
        )}
   }
}
