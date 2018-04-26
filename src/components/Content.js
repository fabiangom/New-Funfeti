//Dependencies
import React, { Component } from 'react';
import './assets/css/Content.css';

//Components
import Carrousel from './subcomponents/Carrousel';
import News from './subcomponents/News';

class Content extends Component {
  render() {
    return (
    	<div className="row Content">
	    	<Carrousel />
	        <News />
    	</div>
    );
  }
}

export default Content;