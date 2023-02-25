import React, { Component } from "react";
import "./Footer.css";
import './media.css'
import Img1 from "./img/ЛоготипF.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer_cover">
        <div className="footer">
          <div className="footer_top">
            <img src={Img1} alt="#" />
            <h2>Подпишитесь на E-mail рассылку</h2>
            <p>
              Если хотиет быть в курсе последних новостей и новинок кино -
              заполните форму ниже и оформите бесплатную E-mail рассылку!{" "}
            </p>
            <div className="footer_center">
              <input type="text" placeholder="Введите свой E-mail" />
              <button>Подписаться</button>
            </div>
            <div className="footer_chekbox">
              <input type="checkbox" />
              <p>
                Соглашаюсь на условия <span> политики конфиденциальности</span>
              </p>
            </div>
          </div>
          <div className="footer_bot">
            <div className="icons">
              <i class="bx bxl-vk"></i>
              <i class="bx bxl-instagram"></i>
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-twitter"></i>
            </div>

            <ul>
              <li> Афиша </li>
              <li>Новости </li>
              <li>Персоны </li>
              <li>Рейтинги</li>
              <li>Рецензии </li>
              <li>Каталог фильмов</li>
            </ul>
            <h5>2020 © Kinoarea.  Все права защищены</h5>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
