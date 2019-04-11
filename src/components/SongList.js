import React, { Component } from 'react'
import axios from 'axios'
// import Song from './Song'


export default class SongList extends Component {
  constructor(){
    super()
    this.state = {
      songs: []
    }
  }

  componentDidMount (){
    axios.get('/api/songs').then(res => {
      this.setState({
        songs: res.data
      })
    }).catch(err => console.log('We have an issue here:',err))
  }

  render (){
    return(
      <div>
        
      </div>
    )
  }

}
