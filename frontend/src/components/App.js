import React from 'react';
import '../App.scss';
import Header from './Header'
import Main from './Main'
import UserProfile from './UserProfile'
import NoteList from './NoteList'
import SignInContainer from './SignInContainer'
import SearchResults from './SearchResults'

// ***  Server URLS ==============
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

// =========== View Navigation ======================
  toggleView = () => {
    if((this.state.signInView === "Sign In") || (this.state.signInView === "Sign In Fail") || (this.state.signInView === "Register Success")) {
      this.setState({
        signInView: "Register"
               })
    } else if((this.state.signInView === "Register") || (this.state.signInView === "Register Fail")) {
      this.setState({
        signInView: "Sign In"
               })
    }
  };

  returnHome = () => {
    this.setState({ searching: false, filteredNotes: this.state.notes })
  }

// ============== SignIn/Out/Reg ===================

  handleSignIn = (e) => {
    let username = e.target[0].value;
    let password = e.target[2].value;

      const dataObj = {
        username: username,
        password: password,
        password_confirmation: password
      }
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
        if(data.error) {
          // console.log(data)
          this.setState({ signInView: 'Sign In Fail', message: data.error })
        } else {
          this.setState({
                signedIn: true,
                user: data.user,
                notes: [...data.notes],
                message: "",
                filteredNotes: [...data.notes]
              })
        }
      })
      .catch(function(error) {
        alert("Async error in fetch. Check console log.");
        console.log(error.message);;
      })
  };

  handleSignOut = () => {
    const configObj = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
              }
    }

    fetch(logout_url, configObj).then(res => res.json()).then(data => {
        this.setState({
            signedIn: false,
            signInView: "Sign Out",
            searching: false,
            user: {},
            notes: [],
            filteredNotes: []
        })
    })
  };

  handleRegister = (e) => {
    // console.log(e.target);
    let firstName = e.target.children[0].children[0].firstChild.lastChild.firstChild.value;
    let lastName = e.target.children[0].children[1].firstChild.lastChild.firstChild.value
    let username = e.target.children[0].children[2].firstChild.lastChild.firstChild.value
    let password = e.target.children[0].children[3].firstChild.lastChild.firstChild.value
    let password_confirmation = e.target.children[0].children[4].firstChild.lastChild.firstChild.value
     // console.log(firstName, lastName, username, password, password_confirmation)
        let dataObj = {
          user: {
          first_name: firstName,
          last_name: lastName,
          username: username,
          password: password,
          password_confirmation: password_confirmation
        }};
        let configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(dataObj)
        };
      fetch(users_url, configObj).then(resp => resp.json()).then(data => {
        if(data.error) {
          // console.log(data)
          this.setState({ signInView: "Register Fail", message: ('Registration error: ' + data.error) })
        } else {
          this.setState({
            signInView: "Register Success"
          })
        }
      }).catch(function(error) {
        alert("Async Error in fetch. Check console log.");
        console.log(error.message);
      })

  };


// =========== Profile Update ============================

handleUserEdit = (e) => {
  // console.log(e)
  const dataObj = {
    'first_name': e.firstname,
    'last_name': e.lastname,
    'username': e.username,
    'location': e.location,
    'program': e.program,
    'current_mod': e.mod
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
                  user: data.user,
                  // editingUser: false
                })
        }).catch(function(error) {
          alert("Async Error in fetch. Check console log.");
          console.log(error.message);
        })
}


// ============Filtering/Sorting Notes ==================
    notesByMod = (num) => {
      let modNotes = this.state.notes.filter(note => (note.mod_num === num))
      return modNotes
    };

    handleSearch = (keyword) => {
      // console.log(keyword)
      if(keyword === "") {
        return (<h2>Not a valid search. Please try again.</h2>)
      } else {
        let filtered = this.state.notes.filter(note => (note.quick_ref.includes(keyword) || note.body.includes(keyword)))
        this.setState({
          searching: true,
          filteredNotes: filtered
        })
      }
    };


// ===========Updating Notes ============================

  handleNoteCreate = (e) => {

    let title = e.target.parentNode.parentNode.children[0].value;
    let ref = e.target.parentNode.parentNode.children[1].value;
    let body = e.target.parentNode.parentNode.children[2].value;
    let arr = e.target.parentNode.previousSibling.innerText.split(" ");
    let mod = arr[arr.length-1];
    console.log(title, ref, body, mod)
    const dataObj = {
      'lab_title': title,
      'quick_ref': ref,
      'body': body,
      'mod_num': mod,
      'user_id': this.state.user.id
    };
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataObj)
    }
    fetch(notes_url, configObj).then(res => res.json()).then(data => {
      this.setState({
        notes: [...this.state.notes, data.note]
      })
      alert(data.message);
    })

  };

    handleNoteDelete = (id) => {
      console.log('fired', id)
      const configObj = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    }
      fetch(notes_url + '/' + id, configObj).then(res => res.json()).then(data => {
        if(data.error) {
          this.setState({ message: data.error })
        } else {
          this.setState({ message: data.message,
                          notes: [...this.data.notes] })
        } })
    };

    handleNoteEdit = (target) => {
      // console.log(target)
      let id = target.id
      let ref = target.ref
      let body = target.body
      // console.log(id, ref, body)
      const dataObj = {
        'quick_ref': ref,
        'body': body
      }
      const configObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataObj)
      }
      fetch(notes_url + '/' + id, configObj).then(res => res.json()).then(data => {
        // console.log(data);
        let newNotes = this.state.notes
        let note = this.state.notes.find(function(ele) {
          return ele.id === id
        })
        // console.log(note)
        let index = newNotes.indexOf(note)
        newNotes[index] = data.note
        // console.log(newNotes)
        this.setState({
          notes: newNotes
        })
        // console.log(this.state.notes)
      })
    };
// **
// ***

render() {
  return(
    <div className="App">
     <Header showSearchBar={this.state.signedIn} onSearch={this.handleSearch} onSignOut={this.handleSignOut}/>
     {this.signedIn()}
    </div>
)};

    signedIn() {
      if(this.state.signedIn && !this.state.searching) {
     return (
      <div>
            <Main className="main">

            <div className="profile-tab" label="My Profile">
              <UserProfile user={this.state.user} editing={this.state.editingUser} startUserEdit={this.startUserEdit} handleUserEdit={this.handleUserEdit}/>
            </div>

            <div className="tab-list-item" label=""></div>
            <div label="Pre Work">
              <NoteList notes={this.notesByMod(0)} mod="0" message={this.state.message} handleNoteDelete={this.handleNoteDelete} handleNoteEdit={this.handleNoteEdit} newNote={this.handleNoteCreate}/>
            </div>
              <div label="Mod 1">
                <NoteList notes={this.notesByMod(1)} mod="1" message={this.state.message} handleNoteDelete={this.handleNoteDelete} handleNoteEdit={this.handleNoteEdit} newNote={this.handleNoteCreate}/>
              </div>
              <div label="Mod 2">
                <NoteList notes={this.notesByMod(2)} mod='2' message={this.state.message} handleNoteDelete={this.handleNoteDelete} handleNoteEdit={this.handleNoteEdit} newNote={this.handleNoteCreate}/>
              </div>
              <div label="Mod 3">
                <NoteList notes={this.notesByMod(3)} mod="3" message={this.state.message} handleNoteDelete={this.handleNoteDelete} handleNoteEdit={this.handleNoteEdit} newNote={this.handleNoteCreate}/>
              </div>
              <div label="Mod 4">
                <NoteList notes={this.notesByMod(4)} mod="4" message={this.state.message} handleNoteDelete={this.handleNoteDelete} handleNoteEdit={this.handleNoteEdit} newNote={this.handleNoteCreate}/>
              </div>
            </Main>
      </div>
    )} else if (this.state.signedIn && this.state.searching) {
      return ( <SearchResults notes={this.state.filteredNotes} returnHome={this.returnHome} handleNoteDelete={this.handleNoteDelete} handleNoteEdit={this.handleNoteEdit} />)
    } else {
      return (
        <SignInContainer handleSignIn={this.handleSignIn} handleRegister={this.handleRegister} toggleView={this.toggleView} selectView={this.state.signInView} message={this.state.message}/>
      )}
    };

}

export default App;
