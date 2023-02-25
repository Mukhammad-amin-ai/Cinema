import React, { Component } from "react";
import "./Navbar.css";
import './Media.css'
import logo from "./img/Логотип.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <div className="navbar">

          <button className="flex_hide unhide">
                <i class="bx bx-search"></i>
              </button>

            <div className="navbar_logo">
              <div className="logo">
                <img src={logo} alt="#" />
              </div>
              <div className="icons">
                <i class="bx bxl-vk"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-twitter"></i>
              </div>
            </div>

            <button className="flex_enter unhide">Войти</button>
 
            <div className="navbar_menu">
              <ul>
                <li> Афиша </li>
                <li> Медиа </li>
                <li> Фильмы </li>
                <li> Актёры </li>
                <li> Новости</li>
                <li> Подборки </li>
                <li> Категории</li>
              </ul>
            </div>
            <div className="navbar_buttons hide">
              <button>
                <i class="bx bx-search"></i>
              </button>
              <button>Войти</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
