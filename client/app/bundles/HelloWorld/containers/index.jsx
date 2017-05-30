import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import reducer from '../reducers';
import HelloWorldView from '../components';

let store;

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    store = createStore(reducer, this.props.name);
    store.subscribe(this.updateName);
  }

  render() {
    return <HelloWorldView
      name={store.getState()}
      onChange={this.onChange}
    />
  }

  onChange = (value) => {
    store.dispatch({type: 'UPDATE', value: value});
  }

  updateName = () => {
    this.setState({});
  }
}
