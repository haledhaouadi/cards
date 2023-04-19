
import React from 'react';
import { Card } from './Components/Card';
import './index.css'

function App() {
  return (
    <div className='cards-container' >
     <Card/>
     <div className='Card-2'>
        <p>"Boost your product and service's credibility by adding testimonials from your clients. <br /><br />

            People love recommendations so feedback from others who've tried it is invaluable."</p>
    <p id='Owner'>— CAREY S. —</p>

    </div>
     <Card/>
    </div>
  );
}

export default App;
