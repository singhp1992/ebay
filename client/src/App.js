import React, { Component } from 'react';
import './App.css';
//import MVP from './containers/mvp'
import AdvertsList from './components/advertList'
import AdvertDetails from './components/advertDetails'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/advertisements" component={AdvertsList} />
          <Route exact path="/advertisements/:id" component={AdvertDetails} />
          <Route exact path="/" render={() => <Redirect to="/advertisements" />} />
        </div>
      </Router>
    );
  }
}

export default App;
