import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Theme from './providers/ThemeProvider/Theme';
import '@dracula/dracula-ui/styles/dracula-ui.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
