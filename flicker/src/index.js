import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

