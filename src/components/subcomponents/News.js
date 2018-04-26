//Dependencies
import React, { Component } from 'react';
import '../assets/css/News.css';

//Assets
import la from '../assets/image/la.jpg';
import chicago from '../assets/image/chicago.jpg';
import ny from '../assets/image/ny.jpg';

class News extends Component {
  render() {
    return (
      <div className="News">
        <h4>Agregados Recientemente</h4>
        <div className="Tarjetas">
          <div className="card">
            <img className="card-img-top" src={la} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Don Mario</h5>
              <p className="card-text">
                <ul>
                  <li>Ubicación: Rio Viejo</li>
                  <li>Capacidad: 60</li>
                  <li>Tipo: Palapa</li>
                  <li>Renta desde: $1200</li>
                </ul>
              </p>
              <a href="#" className="btn btn-primary">Ver Más</a>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={chicago} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">La Ceiba</h5>
              <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
              <a href="#" className="btn btn-primary">Ver Más</a>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={ny} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Los Mangos</h5>
              <p className="card-text">Cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
              <a href="#" className="btn btn-primary">Ver Más</a>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={chicago} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Las Rosas</h5>
              <p className="card-text">
                <ul>
                  <li>Ubicación: Atasta</li>
                  <li>Capacidad: 50</li>
                  <li>Tipo: Palapa</li>
                  <li>Renta desde: $1800</li>
                </ul>
              </p>
              <a href="#" className="btn btn-primary">Ver Más</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;