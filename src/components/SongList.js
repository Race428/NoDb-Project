import React, { Component } from 'react'
import axios from 'axios'
import Song from './Song'


 class SongList extends Component {
  

 

  addSong = (newSong) => {
    axios.post('/api/songs', newSong).then(res => { 
      this.setState({
        songs: res.data
      })
    }).catch(err =>
      console.log('we have a add song error',err))
  }

  render (){
   let music = this.props.songInfo.map((song) => {
    return < Song songInfo = {song} deleteSong = {this.props.deleteSong} editSong = {this.props.editSong}/>
   }) 
    return(
      <div> 
        {music}
      </div>
    )
  }

}

export default SongList
