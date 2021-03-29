import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Routes
import LandingPage from './routes/LandingPage/LandingPage'

// Components 
import NavBar from './components/NavBar/NavBar'
import SearchResults from './routes/SearchResults/SearchResults';
import DetailedNeedView from './routes/DetailedNeedView/DetailedNeedView'
import Dashboard from './routes/Dashboard/Dashboard'
import LoginPage from './routes/LoginPage/LoginPage'
import Confirmed from './routes/Confirmed/Confirmed';

function App() {
  return (
    <>
      <Router>
    <div className="App">
      <NavBar/>
    </div>

      <div>
        <Switch>
          <Route exact path="/">
              <LandingPage/>
          </Route>
          <Route path="/search-results">
              <SearchResults/>
          </Route>
          <Route path="/Needs">
              <DetailedNeedView/>
          </Route>
          <Route path="/Dashboard">
              <Dashboard/>
          </Route>
          <Route path="/Login">
              <LoginPage/>
          </Route>
          <Route path="/Confirmed">
              <Confirmed/>
          </Route>
        </Switch>
      </div>
      </Router>
  </>
  );
}

export default App;
