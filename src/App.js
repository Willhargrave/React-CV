import React, { component } from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
export default App;
