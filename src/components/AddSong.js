import React, { Component } from 'react'
import axios from 'axios'

class AddSong extends Component {

constructor(){
  super ()

  this.state = { 
    song : '',
    artist: ''
  }
}

handleChange = e => {
  let { value, song } = e.target
  this.setState ({
    [song] : value 
  })
}

handleClick = () => {
  let newSong = this.state

  this.props.createNewSong(newSong)
}

render () { 
  return (
    <div>
      <input onChange = {this.handleChange}
      name = 'song'
      type = 'text'
      placeholder = 'song name'/> 
      <input onChange = {this.handleChange}
      name = 'artist'
      type = 'text'
      placeholder = 'artist name' /> 
      <button onClick = { this.handleClick}>Add song</button>
    </div>
  )
}



}

export default AddSong 