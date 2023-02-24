import React, { Component } from "react";
import "./Album.css";

import Img1 from "./Img/image 1.png";
import Img2 from "./Img/image 2.png";
import Img3 from './Img/image 3.png'
import Img4 from "./Img/image 4.png";
import Img5 from './Img/image 5.png'
import Img6 from "./Img/image 6.png";
import Img7 from './Img/image 7.png'
import Img8 from "./Img/image 8.png";
import Img9 from './Img/image 9.png'
import Img10 from "./Img/image 10.png";
import Img11 from "./Img/image 11.png";
import Img12 from "./Img/image 12.png";
import Img13 from './Img/image 13.png'
import Img14 from "./Img/image 14.png";
import Img15 from './Img/image 15.png'
import Img16 from "./Img/image 16.png";
import Img17 from './Img/image 17png.png'
import Img18 from "./Img/image 18.png";
import Img19 from './Img/image 19.png'
import CardFilm from "../Assets/CardFilm/CardFilm";
class Album extends Component {
  render() {
    return (
      <>
        <div className="album_cover">
          <div className="album_title">
            <h3>22 апреля 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img1}
              filmName={"Гудбай, Америка"}
              description={"Мелодрама, комедия"}
            />
            <CardFilm
              img={Img2}
              filmName={"Добрый человек из Сезуана"}
              description={"Драма"}
            />
          </div>
        </div>
        <div className="album_cover">
          <div className="album_title">
            <h3>23 апреля 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img3}
              filmName={"Гудбай, Америка"}
              description={"Мелодрама, комедия"}
            />
            <CardFilm
              img={Img4}
              filmName={"Добрый человек из Сезуана"}
              description={"Драма"}
            />
               <CardFilm
              img={Img5}
              filmName={"Добрый человек из Сезуана"}
              description={"Драма"}
            />
          </div>
        </div>
        <div className="album_cover">
          <div className="album_title">
            <h3>30 апреля 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img6}
              filmName={"Морские паразиты"}
              description={"Ужасы, фантастика, ..."}
            />
            <CardFilm
              img={Img7}
              filmName={"О бесконечности"}
              description={"Драма"}
            />
               <CardFilm
              img={Img8}
              filmName={"Белка и Стрелка: Карибская тайна"}
              description={"Мультфильм, комедия, приключения, семейный"}
            />
               <CardFilm
              img={Img9}
              filmName={"Запретная зона"}
              description={"Триллер"}
            />
          </div>
        </div>
        <div className="album_cover">
          <div className="album_title">
            <h3>22 апреля 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img10}
              filmName={"Дэвид Боуи: История человека со звезд"}
              description={"Драма, биография"}
            />
            <CardFilm
              img={Img11}
              filmName={"Запретная кухня"}
              description={"Семейный"}
            />
          </div>
        </div>
        <div className="album_cover">
          <div className="album_title">
            <h3>4 мая 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img12}
              filmName={"Подольские курсанты"}
              description={"Военный, драма, история"}
            />
          
          </div>
        </div>
        <div className="album_cover">
          <div className="album_title">
            <h3>7 мая 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img13}
              filmName={"8 с половиной"}
              description={"Драма, ..."}
            />
            <CardFilm
              img={Img14}
              filmName={"Выбивая долги"}
              description={"Триллер, драма, криминал"}
            />
               <CardFilm
              img={Img15}
              filmName={"Агент Лев"}
              description={"Комедия"}
            />
               <CardFilm
              img={Img16}
              filmName={"Вечность между нами"}
              description={"Фэнтези, драма, мелодрама"}
            />
          </div>
        </div>
        <div className="album_cover">
          <div className="album_title">
            <h3>7 мая 2020</h3>
          </div>
          <div className="albumcard">
            <CardFilm
              img={Img17}
              filmName={"Клятва"}
              description={"Биография, военный, драма, история, ..."}
            />
            <CardFilm
              img={Img18}
              filmName={"Матера – город из камня"}
              description={"Документальный"}
            />
               <CardFilm
              img={Img19}
              filmName={"Приключения котёнка Пелле"}
              description={"Мультфильм"}
            />
              
          </div>
        </div>
      </>
    );
  }
}

export default Album;
