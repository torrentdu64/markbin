import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

const routes = (
  <BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
