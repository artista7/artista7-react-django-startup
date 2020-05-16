import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import moviesComponent from './components/movies'
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={moviesComponent}></Route>
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
