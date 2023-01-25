import React from 'react';
import work from '../images/work.jpg'; // Tell webpack this JS file uses this image



function Image() {
  // Import result is the URL of your image
  return <img src={work} alt="Logo" className='work-image'/>;
}

export default Image