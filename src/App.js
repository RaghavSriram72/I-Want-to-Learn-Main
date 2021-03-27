import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link className="App-link" to="/page2">Page2</Link>
          </div>
          <Switch>
            <Route exact path="/">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <p>The current time is {currentTime}.</p>
            </Route>
            <Route path="/page2">
                <p>This is page 2!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    <body>

        <script src="/__/firebase/8.3.1/firebase-app.js"></script>

        https://firebase.google.com/docs/web/setup#available-libraries
        <script src="/__/firebase/8.3.1/firebase-analytics.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-firestore.js"></script>

        <script src="/__/firebase/init.js"></script>
        
     </body>
    </div>
  );
}

export default App;
