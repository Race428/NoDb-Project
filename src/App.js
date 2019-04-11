import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from '../components/Header'
import Inputs from './Inputs'
import SongList from './components/SongList'
import AddSong from './components/AddSong'






class App extends Component {
  constructor() { 
    super()
    this.state = {
      songs:[]
    }
  }

  updateList(){

  }

  addSong(){

  }

  deleteSong(){

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
       <Inputs/>
       <SongList/> 
       <AddSong/> 
      </div>
    );
  }
}

export default App;
