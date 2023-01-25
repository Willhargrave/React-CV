import React, { component } from 'react';
import Navbar from "./components/Navbar"
import Personal from "./components/Personal"
import Image from './components/image';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
         <Navbar />
         <div className='main'>
        <Image />
         <Personal />
         </div>
      </div>
    );
  }
}
export default App;
