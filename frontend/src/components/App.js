import React from 'react';
import '../App.scss';
import Header from './Header'
import Main from './Main'
import UserProfile from './UserProfile'
import NoteList from './NoteList'
import SignInContainer from './SignInContainer'


// ***  Set Proper server URLS ==============
const users_url = 'http://localhost:3000/users'
const notes_url = 'http://localhost:3000/notes'

//========== Temp seed data===============
const user = { name: "Jason Leach", email: "asdf@gmail.com", current_mod: 4, location: "Seattle"}
const body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'
const quick_ref = "reference to notes"
const notes = [
  {
    title: 'Lab 1 Title',
    body,
    quick_ref
  },
  {
    title: 'Concepts',
    body,
    quick_ref
  },
  {
    title: 'Lab Syntax',
    body,
    quick_ref
  },
  {
    title: 'Practice Lab',
    body,
    quick_ref
  }
]
// =======================================

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      signedIn: true,
      signInView: "Sign In",
      message: "",
      user: {},
      notes: [],
      filteredNotes: []
    }
  }

  toggleView = () => {
    if(this.state.signInView === "Sign In") {
      this.setState({
        signInView: "Register"
               })
    } else if(this.state.signInView === "Register") {
      this.setState({
        signInView: "Sign In"
               })
    }
  };

  handleSignIn(e) {
    console.log(e.target)
    // let user_id;
    // fetch(users_url + "/" + user_id).then(res => res.json())
    //   .then(data => { console.log(data);
          // return this.setUser(user);
    // })
    // if(valid credentials) {
    this.setState({
      signedIn: true,
      // user: data.user,
      // notes: [...data.user.notes],
      // filteredNotes: [...data.user.notes],
    })
    // } else {
    // this.setState({
    //   signInView: "Sign In Fail"
    // })
    // }
  };

  handleSignOut = (e) => {
    console.log(e.target)
    this.setState({
        signedIn: false,
        signInView: "Sign In",
        message: "",
        user: {},
        notes: [],
        filteredNotes: []
    })
  };

  handlecreateUser = (e) => {
    console.log(e.target);
        // const dataObj = {
        //   'first_name': '',
        //   'last_name': '',
        //   'username': '',
        //   'password': ''
        // };
        // const configObj = {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   },
        //   body: JSON.stringify(dataObj)
        // }
        // fetch(users_url, configObj).then(resp => resp.json).then(console.log)
      //   if(reg successful) {
      //   this.setState({
      //     SignInView: "Register Success"
      //   })
      // } else {
      //   this.setState({
      //     SignInView: "Register Fail"
      //   })
      // }
  };



    handleSearch(e) {
      if(e.target.value === "") {
        this.setState({
          filteredNotes: this.state.notes
        })
      } else {
        let filtered = this.state.notes.filter(note => (note.quick_ref.includes(e.target.value) || note.body.includes(e.target.value)))
        this.setState({
          filteredNotes: filtered
        })
      }
    }
// **
// ***
    signedIn() {
      if(this.state.signedIn) {
     return (
      <div className="App">
        <div className="main">
            <Main>

            <div className="profile-tab" label="My Profile">
              <UserProfile user={user}/>
            </div>

            <div className="tab-list-item" label=""></div>
            <div label="Pre Work">
              <NoteList notes={notes} mod="0" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
            </div>
              <div label="Mod 1">
                <NoteList notes={notes} mod="1" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>
              <div label="Mod 2">
                <NoteList notes={notes} mod='2' title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>
              <div label="Mod 3">
                <NoteList notes={notes} mod="3" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>
              <div label="Mod 4">
                <NoteList notes={notes} mod="4" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>

            </Main>
        </div>
      </div>
    )} else {
      return (
        <SignInContainer toggleView={this.toggleView} selectView={this.state.signInView}/>
      )}
    };

  render() {
    return(
      <div>
        <header className="App-header">
           <Header showSearchBar={this.state.signedIn} onFilter={this.handleSearch} onLogout={this.handleLogout}/>
        </header>

       {this.signedIn()}
      </div>
  )};
}

export default App;
