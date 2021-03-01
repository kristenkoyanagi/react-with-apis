import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AirportInfo from './components/AirportInfo';

function App() {
  return (
    <div className="App">
      <Header title="Airport Info"></Header>
      <AirportInfo></AirportInfo>
      <Footer title="2020"></Footer>
    </div>
  );
}

export default App;