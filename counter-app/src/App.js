import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="">
        <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
