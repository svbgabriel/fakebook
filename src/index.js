import React, { Component } from 'react';
import { render } from 'react-dom';

// import from './styles.scss';

class App extends Component {
  state = {};

  render() {
    return <h1>Hello Fakebook</h1>;
  }
}

render(<App />, document.getElementById('app'));
