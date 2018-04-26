//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './assets/css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };
  render() {
    const { copyright = '&copy; FabianGomez 2018' } = this.props;
    return (
      <div className="row Footer">
        <div className="col-12 accounts">
          <div>
            {copyright}
          </div>
          <div>
            FaceBook Twitter Google Instagram
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;