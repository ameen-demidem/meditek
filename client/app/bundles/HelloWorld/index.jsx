import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import HelloWorld from './containers';

const bundle = ({name}) => {
  const store = createStore(reducer, name);
  return <Provider store={store}>
    <HelloWorld />
  </Provider>
}

bundle.propTypes = {
  name: PropTypes.string.isRequired,
}

export default bundle;
