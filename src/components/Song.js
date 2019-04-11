import React, { Component } from 'react'
import axios from 'axios'

class Song extends Component {

render(){
  

  return (

  <div className = 'name'>
    <h1>{this.props.songInfo.name} {this.props.songInfo.artist}</h1> 
  

  </div>
  )
    
    
  
  



 

}
}

export default Song