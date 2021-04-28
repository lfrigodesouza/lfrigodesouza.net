import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Theme from './providers/ThemeProvider/Theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
