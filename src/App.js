import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main/main';
import Page404 from './pages/Page404/page404';
import About from './pages/About/about';
import './sass/style.scss';

function App() {
  return (
    <main className="main">
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Page404 path="/page404" />
          </Route>
          <Redirect to="/page404" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
