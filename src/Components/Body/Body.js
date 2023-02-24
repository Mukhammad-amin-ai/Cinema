import React, { Component } from "react";

import "./body.css";

class Body extends Component {
  // state = {
  //       drop:({open:false}),
  //    };
  
  // dropBtn = ()=>{
  //   if(this.state.drop ===false){
  //     let a = this.state.drop
  //     a = true
        
      
  //   }
  // }
  

  render() {
    return (
      <div className="Page_title">
        <div className="title_left">
          <h1>График премьер фильмов</h1>
          <div className="title_navigation">
            <h4>
              Главная
              <i class="bx bx-chevron-right"></i>
            </h4>
            <h5>Афиша</h5>
          </div>
          <p>
            Также как дальнейшее развитие различных форм деятельности, в своём
            классическом представлении, допускает  внедрение
            первоочередных требований. Современные технологии достигли такого
            уровня, что внедрение  современных методик предполагает
            независимые способы реализации стандартных подходов. Сторонники
             тоталитаризма в науке могут быть объявлены нарушающими
            общечеловеческие нормы этики и морали.
          </p>
        </div>
        <div className="title_right">
          <div className="cover">
          <button className="dropBtn" onClick={this.dropBtn}> <h3>Choose</h3></button>
          
          <div className="dropList">
            <ul>
              <li>Hello</li>
            </ul>
          </div>

          

          </div>
          <div className="cover">
          <button className="dropBtn" onClick={this.dropBtn}> <h3>Choose</h3></button>
          
          <div className="dropList">
            <ul>
              <li>Hello</li>
            </ul>
          </div>

          

          </div>
        </div>
      </div>
    );
  }
}

export default Body;
