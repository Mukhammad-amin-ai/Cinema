import React, { Component } from 'react'
import './CardFilm.css'
import './media.css'
class CardFilm extends Component {
  render() {
    return (
        <div className="card">
          <div className="card_top">
            <img src={this.props.img} alt="$" />
          </div>
          <div className="card_text">
            <h3>{this.props.filmName}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
    )
  }
}
export default CardFilm