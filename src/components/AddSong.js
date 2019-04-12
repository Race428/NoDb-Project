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
  this.setState ({
    name:'',
    artist:'',
  })
}

render () { 
  return (
    <div>
      <input onChange = { (e) => this.handleChange(e, 'name')}
      name = 'song'
      type = 'text'
      placeholder = 'song name'
      value = {this.state.name}
      /> 
      <input onChange = { (e) => this.handleChange(e,'artist')}
      name = 'artist'
      type = 'text'
      placeholder = 'artist name'
      value = {this.state.artist} /> 
      <button disabled= {this.state.name === '' && this.state.artist ===''} onClick = {this.handleClick}>Add song</button>
    </div>
  )
}



}

export default AddSong 