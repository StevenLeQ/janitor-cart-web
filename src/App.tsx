import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarFinal from './scenes/global/Sidebar';

function App() {
  return (
    <div className="App">
      <SidebarFinal />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          From Humble Beginnings
        </p>
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10" type="email" placeholder="jane@example.com"></input>
      </header>
    </div>
  );
}

export default App;
