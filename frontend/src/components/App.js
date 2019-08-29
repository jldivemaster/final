import React from 'react';
import '../App.scss';
import Header from './Header'
import Main from './Main'
import UserProfile from './UserProfile'
import NoteList from './NoteList'

//========== Temp seed data===============
const user = { name: "Jason Leach", email: "asdf@gmail.com", current_mod: 4, location: "Seattle"}
const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'
const data = [
  {
    title: 'Lab 1 Title',
    paragraph
  },
  {
    title: 'Concepts',
    paragraph
  },
  {
    title: 'Lab Syntax',
    paragraph
  },
  {
    title: 'Practice Lab',
    paragraph
  }
]
// =======================================

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>

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
  );
}

export default App;
