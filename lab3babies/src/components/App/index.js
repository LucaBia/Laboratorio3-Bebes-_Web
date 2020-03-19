import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllBabies from './babies';
import AllEvents from './events';
import Nav from './barraTareas';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/babies" component={AllBabies}/>
          <Route path="/Events" component={AllEvents} /> 
        </Switch>     
      </div>
    </Router>
  </Provider>
);

export default App;