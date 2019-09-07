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
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} />
               </div>);
       case 'Register':
        return(<div>
                <Register handleRegister={this.props.handleRegister} toggleView={this.props.toggleView} />
                </div>);
       case 'Register Success':
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="Your account has been created!  Log in to continue."/>
               </div>);
      case 'Register Fail':
        return(<div>
                <Register handleRegister={this.props.handleRegister} toggleView={this.props.toggleView} message={this.props.message}/>
              </div>);
      case 'Sign In Fail':
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message={this.props.message}/>
              </div>);
      case 'Sign Out':
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="You are logged out." />
              </div>);
       default:
        return(<div>
                <SignIn handleSignIn={this.props.handleSignIn} toggleView={this.props.toggleView} message="Default hit. Check switch in container component." />
               </div>)
     }
   }


}
