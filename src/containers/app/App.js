import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import H1 from '../../components/ui/H1';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
