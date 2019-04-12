import React, { Component } from 'react'
import axios from 'axios'

class Song extends Component {
constructor(props) {
  super(props)

  this.state = {
    name: props.name,
    artist: props.artist
  }

  
}
// idk if i should add state? I know that I need to affect the actuall array in app.js





songChange = (e , key) => {
  
  let { value } = e.target
  this.setState ({
    [key] : value
  })
}


handleClick = () => {
  this.props.editSong(this.props.songInfo.id,this.state.name,this.state.artist)
  this.setState({
    name:'',
    artist:''
  })

}

render(){
  

  return (

  <div className = 'name'>
    <h1>{this.props.songInfo.name} - {this.props.songInfo.artist}
    <button onClick = {() => this.props.deleteSong(this.props.songInfo.id)}>Delete Song </button>
    
    </h1>   

    <input onChange = { (e) => this.songChange(e,
      'name')}
      name = 'song'
      type = 'text'
      placeholder = 'new song name'
      value = {this.state.name}
      /> 
    <input onChange = {(e) => this.songChange(e,
      'artist')}
      name ='artist'
      type ='text'
      placeholder = 'new artist name'
      value = {this.state.artist}
      />
      <button onClick = {this.handleClick}>Change</button>
    
    
 

  </div>
  )
}
}

export default Song