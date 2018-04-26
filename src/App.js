//Dependencies
import React, { Component } from 'react';
import './App.css';

//Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

//Data
import items from './data/menu';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Header title="Funfeti" items={items} />
			<Content />
			<Footer copyright="&copy; FabianGomez 2018" />
		</div>
    );
  }
}

export default App;
