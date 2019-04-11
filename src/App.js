import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from '../components/Header'
import Inputs from './components/Inputs'
import SongList from './components/SongList'
import AddSong from './components/AddSong'
import axios from 'axios'
import { send } from 'q';
// import Delete from './components/DeleteSong'





class App extends Component {
  constructor() { 
    super()
    this.state = {
      songs:[]
    }
  }

  componentDidMount (){
  
    axios.get('/api/songs').then(res => {
      console.log(res)
      this.setState({
        songs: res.data
      })
    }).catch(err => console.log('We have an issue here:',err))
  }

  createNewSong = (name, artist)=> {
    axios.post('/api/songs', {name: name ,
      artist : artist}).then((res) => { 
        this.setState({songs: res.data})
      })

  }

  deleteSong = (songsId) => {
    console.log(songsId)
    axios.delete(`/api/songs/${songsId}`).then((res) =>{
      this.setState({songs: res.data})
    })
  }

  render() {
    return (
      <div className="App">
       {/* <Inputs/> */}
       <AddSong createNewSong= {this.createNewSong}/> 
       <SongList songInfo= {this.state.songs} deleteSong = {this.deleteSong}/> 
       

      </div>
    );
  }
}

export default App;
