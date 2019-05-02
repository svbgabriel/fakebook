import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';

import './styles.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <h1>Hello Fakebook</h1>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
