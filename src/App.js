import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Container from './Container';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Container/>
    </div>
  );
}

export default App;
