import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBarComponent from './components/SideBarComponent';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <div className="App">
      <SideBarComponent />
      <TableComponent />
    </div>
  );
}

export default App;
