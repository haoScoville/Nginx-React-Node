import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
    
  );
}

export default App;
