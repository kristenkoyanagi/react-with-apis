import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Header title="Airport Info"></Header>
      <Feed></Feed>
      <Footer title="2020"></Footer>
    </div>
  );
}

export default App;
