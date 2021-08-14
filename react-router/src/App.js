import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import About from './pages/About/about.jsx';
import Home from './pages/Home/home.jsx';
import Details from './pages/Details/details.jsx';
import Page404 from './pages/Page404/page404.jsx';
import './sass/style.scss';

function App() {
  const nodeRef = useRef(null);
  const [isTransition, setIsTransition] = useState(false);
  const transitionDelay = 300;
  useEffect(() => {
    if (!isTransition) {
      setTimeout(() => {
        setIsTransition(true);
      }, transitionDelay);
    }
  });
  const h1 = <h1 className="main-title">React.Routing</h1>;
  const routes = [
    { path: '/', Component: Home },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/details/:id',
      Component: Details,
    },
    {
      path: '/page404',
      Component: Page404,
    },
  ];

  return (
    <div className="main">
      {h1}
      <BrowserRouter>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
          <Redirect to="/page404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
