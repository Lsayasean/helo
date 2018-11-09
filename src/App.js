import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import store from '../src/ducks/store';
import { Provider } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div >
            <Nav />
            {routes}
          </div>
        </HashRouter>
      </Provider >
    );
  }
}

export default App;
