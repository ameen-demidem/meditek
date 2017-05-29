import React from 'react';
import PropTypes from 'prop-types';
// import { createStore } from 'redux';
// import { HelloWorldReducer } from './reducers/HelloWorld';
import HelloWorldView from '../components/HelloWorld';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  render() {
    return <HelloWorldView name={this.props.name}/>
  }
}
