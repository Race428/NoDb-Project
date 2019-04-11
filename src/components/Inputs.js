import React, { Component } from 'react'
import axios from 'axios'

class Inputs extends Component {
  constructor() {
    super()
    this.state = {
      song: '',
      artist: ''
    }
  }

  render(){
    return(
      <div>
        <input className = 'name' 
        placeholder = 'Song Name'
        /> 
        <input className = 'artist' 
        placeholder = 'Artist name'/> 
      </div>
      
    )
  }
}

export default Inputs