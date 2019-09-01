import React from 'react'
import SignIn from './SignIn'
import Register from './Register'

export default class SignInContainer extends React.Component {
  constructor(props) {
      super(props);
    this.state = { currentView: 'signIn' }
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
     switch(this.state.currentView) {
       case 'signIn':
        return(<div>
                <SignIn message=""/>
               </div>);
       case 'registering':
        return(<div>
                <Register createUser={this.message="registering"/>
                </div>);
       case 'registered':
        return(<div>
                <SignIn message="account created"/>
               </div>);
      case 'register failed':
        return(<div>
                <Register message="registration failed"/>
              </div>);
      case 'signIn failed':
        return(<div>
                <SignIn message="signIn failed"/>
              </div>);
       default:
        return(<div>
                <SignIn />
               </div>)
     }
   }


}
