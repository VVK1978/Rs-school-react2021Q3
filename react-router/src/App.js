import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/About/about.jsx';
import Home from './pages/Home/home.jsx';
import Details from './pages/Details/details.jsx';
import Page404 from './pages/Page404/page404.jsx';
import './sass/style.scss';

class App extends Component {
  render() {
    this.h1 = <h1 className="main-title">React.Routing</h1>;

    return (
      <div className="main">
        {this.h1}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route>
              <Page404 path="/page404" />
            </Route>
            <Redirect to="/page404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
