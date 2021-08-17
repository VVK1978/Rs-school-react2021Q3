import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './components/reducers/index';
import Main from './pages/Main/main.jsx';
import './sass/style.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <main className="main">
          <BrowserRouter>
            <div className="main-container">
              <Route exact path="/">
                <Main />
              </Route>
            </div>
          </BrowserRouter>
        </main>
      </Provider>
    </>
  );
}

export default App;
