import './App.css';
import React from 'react';
import Nav from './pages/Nav';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App() {
  return (
    <React.Fragment className="grid-container">
      <Nav/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
