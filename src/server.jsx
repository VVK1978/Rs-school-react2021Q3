import express from 'express';
import 'ignore-styles';
import React from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import store from './components/reducers/index';
import App from './App';

const app = express();
app.use(express.static('dist'));
const PORT = 3001;

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="utf-8">
           <link rel="icon" href="assets/img/favicon.ico">
           <script src="https://kit.fontawesome.com/af9c927aab.js" crossorigin="anonymous"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SSR</title>
          <link rel="stylesheet" href="/css/bundle.css">
      </head>
      <body>
        <div id="root">
          ${componentHTML}
        </div>
        <script defer src="/bundle.js"></script>
      </body>
    </html>
  `;
}

app.use((req, res) => {
  const componentHTML = ReactDom.renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>,
  );
  return res.end(renderHTML(componentHTML));
});

/* app.use((req, res) => {
  const htmlElement = '<h1>hello</h1>';
  return res.end(renderHTML(htmlElement));
}); */

app.listen(PORT, () => {
  console.log('Server is started at port:', PORT);
});
