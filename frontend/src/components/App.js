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
const data = [
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
  // ***
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {},
      notes: [],
      filteredNotes: []
    }
  }

      createUser(e) {
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
      }
      handleLogin(e) {
            console.log(e.target)
            let user_id;
            fetch(users_url + "/" + user_id)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              // return this.setUser(user);
            })
          };

          // fetchNotes(e) {
          //   fetch(notes_api)
          //   .then(res => res.json())
          //   .then(notes => {
          //     return this.setNotes(notes)
          //   })
          // }

          setUser(user) {
            this.setState({
              loggedIn: true,
              user: {...user}
            })
          };

          // setNotes(notes) {
          //   this.setState({
          //     notes: {notes},
          //     filteredNotes: {notes}
          //   })
          // }


    handleLogout = () => {
      this.setState({
        loggedIn: false,
        user: {},
        notes: [],
        filteredNotes: []
      })
    }


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
      if(this.state.loggedIn) {
     return (
      <div className="App">
        <div className="main">
            <Main>

            <div className="profile-tab" label="My Profile">
              <UserProfile user={user}/>
            </div>

            <div className="tab-list-item" label=""></div>
            <div label="Pre Work">
              <NoteList data={data} mod="0" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
            </div>
              <div label="Mod 1">
                <NoteList data={data} mod="1" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>
              <div label="Mod 2">
                <NoteList data={data} mod='2' title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>
              <div label="Mod 3">
                <NoteList data={data} mod="3" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>
              <div label="Mod 4">
                <NoteList data={data} mod="4" title1="Lab 1 Title" title2="Lab 2 Title" ref1="Quick Refs 1" ref2="Quick Refs 2"/>
              </div>

            </Main>
        </div>
      </div>
    )} else {
      return (
        <SignInContainer onCreateUser={this.createUser} handleLogin={this.handleLogin}/>
      )}
    };

  render() {
    return(
      <div>
        <header className="App-header">
           <Header showSearchBar={this.state.loggedIn} onFilter={this.handleSearch} onLogout={this.handleLogout}/>
        </header>

       {this.signedIn()}
      </div>
  )};
}

export default App;
