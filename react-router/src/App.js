import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import About from './pages/About/about.jsx';
import Home from './pages/Home/home.jsx';
import Details from './pages/Details/details.jsx';
import Page404 from './pages/Page404/page404.jsx';
import './sass/style.scss';

function App() {
  const h1 = <h1 className="main-title">React.Routing</h1>;
  return (
    <div className="main">
      {h1}
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
