import React, { Component } from 'react';

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

  //needs to update the name and artist and know when clicking the specific id button 
  editSong = (songsId, name, artist) => {
    console.log(songsId,name, artist)
    axios.put(`/api/songs/${songsId}`,{ 
      id : songsId,
      name: name, 
      artist: artist}).then((res) => {
      this.setState({songs: res.data})
    })
  }

  render() {
    return (
      <section className = 'app'>
            

        
        <section className = 'header'>
            
          <div className = 'logo'>
            <img className = 'logoImage'src ='https://cdn.good-halal.com/wp-content/uploads/2017/06/12417655_1198236106857565_8590988678161408479_n-800x800.png'
            alt = 'master taco logo' /> 
          </div>
        <div className = 'logobackGround'></div>
          <div className = 'myTunes'>
            <h1 className = 'titleName'>MY TUNES</h1>
          </div>
        </section>
        

        <section className = 'addSongs'>
          <h2><u>ADD SONGS </u></h2>
          <AddSong createNewSong= {this.createNewSong}/> 
          
        </section>
   <hr></hr>
        <section className = 'songList'>
          <SongList songInfo= {this.state.songs} deleteSong  = {this.deleteSong} editSong = { this.editSong}/> 
          <hr></hr>
        </section>
    
      </section>
      
    
    
    
    
    
    );
  }
}

export default App;


