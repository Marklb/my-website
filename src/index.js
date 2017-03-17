import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Publications from './components/Publications';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="projects" component={Projects}>
    
    </Route>
    <Route path="publications" component={Publications} />
    <Route path="contact" component={Contact} />

    <Route path="*" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);

// <Route path="resume" component={Resume} />
