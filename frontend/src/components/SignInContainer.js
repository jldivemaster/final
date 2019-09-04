import React from 'react'
import SignIn from './SignIn'
import Register from './Register'

export default class SignInContainer extends React.Component {
  constructor(props) {
      super(props);
    this.state = { currentView: 'signIn' }
  }


   render() {
     switch(this.props.selectView) {
       case 'Sign In':
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message=""/>
               </div>);
       case 'Register':
        return(<div>
                <Register handleRegister={this.props.handleRegister} toggleView={this.props.toggleView} message="registering"/>
                </div>);
       case 'Register Success':
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="account created"/>
               </div>);
      case 'Register Fail':
        return(<div>
                <Register handleRegister={this.props.handleRegister} toggleView={this.props.toggleView} message="registration failed"/>
              </div>);
      case 'Sign In Fail':
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="signIn failed"/>
              </div>);
       default:
        return(<div>
                <SignIn />
               </div>)
     }
   }


}
