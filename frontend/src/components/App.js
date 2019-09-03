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
const login_url = 'http://localhost:3000/login'
const logout_url = 'http://localhost:3000/logout'

//========== Temp seed data===============
const user = { name: "Jason Leach", username: "jgl", current_mod: 4, location: "Seattle"}
const body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.  Now let us go and make this fucker a really long facking text string. asf;dgojneqrgpqeorinvq[erofjknq  wer[boianrs[efojkwnef;qlaeijbvPSEINF wlekvnafrviojasdf;vkansr;vakrnv;aer]]] '
const quick_ref = "reference to notes"
const notes = [
  {
    id: 1,
    title: 'Lab 1 Title',
    body,
    quick_ref
  },
  {
    id: 2,
    title: 'Concepts',
    body,
    quick_ref
  },
  {
    id: 3,
    title: 'Lab Syntax',
    body,
    quick_ref
  },
  {
    id: 4,
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
      signedIn: false,
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

  handleSignIn = (e) => {
    // console.log("sign in", e.target.children)
    let username = e.target[0].value;
    let password = e.target[2].value;
    console.log(username, password)
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
      .then(data => { console.log(data);

      this.setState({
          signedIn: true })

    //     user: data.user,
    //     notes: [...data.user.notes],
    //     filteredNotes: [...data.user.notes],
    //   })
    // } else {
    // this.setState({
    //   signInView: "Sign In Fail"
    // })
    // }
    })
  };

  handleSignOut = (e) => {
    console.log(e.target)

    fetch(logout_url).then(res => res.json())
      .then(data => { console.log(data);

    this.setState({
        signedIn: false,
        signInView: "Sign In",
        message: "",
        user: {},
        notes: [],
        filteredNotes: []
      })
    })
  };

  handleRegister = (e) => {
    let fName = e.target[0].value;
    let lName = e.target[2].value;
    let userName = e.target[4].value;
    let password = e.target[6].value;
    console.log(fName, lName, userName, password)
        const dataObj = {
          'first_name': fName,
          'last_name': lName,
          'username': userName,
          'password': password
        };
        const configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(dataObj)
        }
        fetch(users_url, configObj).then(resp => resp.json()).then(data => console.log("created", data))
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

  handleNoteChange = (note) => {
    const dataObj = {
      body: note.body,
      quick_ref: note.quick_ref
    };
    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataObj)
    }
    fetch(notes_url + '/' + note.id, configObj).then(res => res.json()).then(data => console.log("Note updated", data))
  };



    handleSearch = (e) => {
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
              <NoteList notes={notes} mod="0" handleNoteChange={this.handleNoteChange} />
            </div>
              <div label="Mod 1">
                <NoteList notes={notes} mod="1" handleNoteChange={this.handleNoteChange} />
              </div>
              <div label="Mod 2">
                <NoteList notes={notes} mod='2' handleNoteChange={this.handleNoteChange} />
              </div>
              <div label="Mod 3">
                <NoteList notes={notes} mod="3" handleNoteChange={this.handleNoteChange} />
              </div>
              <div label="Mod 4">
                <NoteList notes={notes} mod="4" handleNoteChange={this.handleNoteChange} />
              </div>

            </Main>
        </div>
      </div>
    )} else {
      return (
        <SignInContainer handleRegister={this.handleRegister} handleSignIn={this.handleSignIn} toggleView={this.toggleView} selectView={this.state.signInView}/>
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
