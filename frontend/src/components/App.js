import React from 'react';
import '../App.scss';
import Header from './Header'
import Main from './Main'
import UserProfile from './UserProfile'
import NoteList from './NoteList'
import SignInContainer from './SignInContainer'
import SearchResults from './SearchResults'


// ***  Set Proper server URLS ==============
const users_url = 'http://localhost:3000/users'
const notes_url = 'http://localhost:3000/notes'
const login_url = 'http://localhost:3000/login'
const logout_url = 'http://localhost:3000/logout'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      signedIn: false,
      searching: false,
      signInView: "Sign In",
      message: "",
      user: {},
      notes: [],
      filteredNotes: [],
      keyword: ""
    }
  };

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

  handleSignIn = (e) => {
    let username = e.target[0].value;
    let password = e.target[2].value;

    const dataObj = {
      'username': username,
      'password': password,
      'password_confirmation': password
    };
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataObj)
    }

    fetch(login_url, configObj).then(res => res.json())
      .then(data => {
      this.setState({
                    signedIn: true,
                    user: data.user,
                    notes: [...data.notes],
                    filteredNotes: [...data.notes]
                  })
          })
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

    notesByMod = (num) => {
      let modNotes = this.state.notes.filter(note => (note.mod_num === num))
      return modNotes
    }

    handleSearch = (keyword) => {
      console.log(keyword)

      if(keyword === "") {
        return (<h2>Not a valid search. Please try again.</h2>)
      } else {
        let filtered = this.state.notes.filter(note => (note.quick_ref.includes(keyword) || note.body.includes(keyword)))
        this.setState({
          searching: true,
          filteredNotes: filtered
        })
      }

    }

    handleUserEdit = (e) => {
      let name = e.target.parentNode.children[0].children[0].innerText
      let username = e.target.parentNode.children[1].children[0].innerText
      let location = e.target.parentNode.children[2].children[0].innerText
      let program = e.target.parentNode.children[3].children[0].innerText
      let mod = e.target.parentNode.children[4].children[0].innerText
      let first_name = name.split(" ")[0]
      let last_name = name.split(" ")[1]
      console.log(name, username, location, program, mod)
      const dataObj = {
        'first_name': first_name,
        'last_name': last_name,
        'username': username,
        'location': location,
        'program': program,
        'current_mod': mod
      };
      const configObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataObj)
      }

      fetch(users_url + '/' + this.state.user.id, configObj).then(res => res.json())
        .then(data => {
        this.setState({
                      user: data.user
                    })
            })
    }
// **
// ***
    signedIn() {
      if(this.state.signedIn && !this.state.searching) {
     return (
      <div className="App">
        <div className="main">
            <Main>

            <div className="profile-tab" label="My Profile">
              <UserProfile user={this.state.user} handleUserEdit={this.handleUserEdit}/>
            </div>

            <div className="tab-list-item" label=""></div>
            <div label="Pre Work">
              <NoteList notes={this.notesByMod(0)} mod="0" />
            </div>
              <div label="Mod 1">
                <NoteList notes={this.notesByMod(1)} mod="1" />
              </div>
              <div label="Mod 2">
                <NoteList notes={this.notesByMod(2)} mod='2' />
              </div>
              <div label="Mod 3">
                <NoteList notes={this.notesByMod(3)} mod="3" />
              </div>
              <div label="Mod 4">
                <NoteList notes={this.notesByMod(4)} mod="4" />
              </div>

            </Main>
        </div>
      </div>
    )} else if (this.state.signedIn && this.state.searching) {
      return ( <SearchResults notes={this.state.filteredNotes} /> )
    } else {
      return (
        <SignInContainer handleSignIn={this.handleSignIn} handleRegister={this.handleRegister} toggleView={this.toggleView} selectView={this.state.signInView}/>
      )}
    };

  render() {
    return(
      <div>
        <header className="App-header">
           <Header showSearchBar={this.state.signedIn} onSearch={this.handleSearch} onSignOut={this.handleSignOut}/>
        </header>

       {this.signedIn()}
      </div>
  )};
}

export default App;
