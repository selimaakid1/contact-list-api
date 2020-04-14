import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact List Full Stack Application</h1>
        <div>
          <Link to="/allcontacts">
            <Button variant="light">All Contacts</Button>
          </Link>
          <Link to="/newcontact">
            <Button variant="light">Add new contact</Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
