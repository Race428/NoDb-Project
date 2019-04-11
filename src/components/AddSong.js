import React, { Component } from 'react'
import axios from 'axios'

class AddSong extends Component {

constructor(){
  super ()

  this.state = { 
    name : '',
    artist: ''
  }
}

handleChange = (e , key) => {
  
  let { value } = e.target
  this.setState ({
    [key] : value 
  })
}



handleClick = () => {
  this.props.createNewSong(this.state.name, this.state.artist)
}

render () { 
  return (
    <div>
      <input onChange = { (e) => this.handleChange(e, 'name')}
      name = 'song'
      type = 'text'
      placeholder = 'song name'/> 
      <input onChange = { (e) => this.handleChange(e,'artist')}
      name = 'artist'
      type = 'text'
      placeholder = 'artist name' /> 
      <button onClick = {this.handleClick}>Add song</button>
    </div>
  )
}



}

export default AddSong 