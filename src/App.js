import React from 'react';
import './style/style.scss';
import { Navbar } from './components/navbar';
import { Welcome } from './components/welcome';


function App() {
  return (
    <div className='App'> 
        <Navbar/>
        <Welcome/>  
    </div>
  );
}

export default App;
