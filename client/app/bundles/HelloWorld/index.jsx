import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import HelloWorld from './containers';

let store;

export default class HelloWorldBundle extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);
    store = createStore(reducer, this.props.name);
  }

  render() {
    return <Provider store={store}>
      <HelloWorld />
    </Provider>
  }
}

