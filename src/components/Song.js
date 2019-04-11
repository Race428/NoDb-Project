import React, { Component } from 'react'
import axios from 'axios'

class Song extends Component {


// idk if i should add state? I know that I need to affect the actuall array in app.js

render(){
  

  return (

  <div className = 'name'>
    <h1>{this.props.songInfo.name} {this.props.songInfo.artist}
    <button onClick = {() => this.props.deleteSong(this.props.songInfo.id)}>Delete Song </button>
    <button>Change</button>
    </h1>   
  

  </div>
  )
}
}

export default Song