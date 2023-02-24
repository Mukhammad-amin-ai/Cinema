import React, { Component } from 'react'
import './drop.css'
export default class Drop extends Component {
    


    drop = ()=>{
        
    }

  render() {
    return (
      <div className="dropContainer">
        <button onClick={this.drop}>click me</button>
      </div>
    )
  }
}
