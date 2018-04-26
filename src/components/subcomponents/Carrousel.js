//Dependencies
import React, { Component } from 'react';
import '../assets/css/Carrousel.css';

//Assets
import la from '../assets/image/la.jpg';
import chicago from '../assets/image/chicago.jpg';
import ny from '../assets/image/ny.jpg';

class Carrousel extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={la} alt="Los Angeles" width="1100" height="500" />
            <div className="carousel-caption">
              <h2>Encuentra el lugar ideal para tu evento especial</h2>
              <button type="button" className="btn btn-primary">Registrate</button>
              <h3>Palapa Los Almendros</h3>
              <p>Breve descripción...</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src={chicago} alt="Chicago" width="1100" height="500" />
            <div className="carousel-caption">
            <h2>Encuentra el lugar ideal para tu evento especial</h2>
            <button type="button" className="btn btn-primary">Registrate</button>
              <h3>Salon Los Tucanes</h3>
              <p>Breve descripción...</p>
              </div>   
          </div>
          <div className="carousel-item">
            <img src={ny} alt="New York" width="1100" height="500" />
            <div className="carousel-caption">
            <h2>Encuentra el lugar ideal para tu evento especial</h2>
            <button type="button" className="btn btn-primary">Registrate</button>
              <h3>Restaurante Los Mariachis</h3>
              <p>Breve descripción...</p>
            </div>   
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Carrousel;