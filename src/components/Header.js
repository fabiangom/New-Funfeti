//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import logo from './assets/image/logo.svg';
import './assets/css/Header.css';



class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { title, items } = this.props;
    return (
      <div className="row Header">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="Header-logo">
            <img className="Logo" src={logo} alt="logo" />
            <h1 className="Title">{title}</h1>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 Menu">
          <ul>
            {items && items.map((item, key) => <li key={key}>{item.title}</li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;