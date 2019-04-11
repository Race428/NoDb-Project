import React, { Component } from 'react'

class Edit Song extends Component {
  constructor (props) {
    super(props)

    this.state ={ 
      song: props.songs.song,
      artist: props.songs.artist
    }
  }

  handleChange = e => {
    let { value,song} = e.target
    this.setState ({
      
    })
  }
    
  }

