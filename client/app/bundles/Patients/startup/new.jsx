import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/new'
import { Provider } from 'react-redux';
import PatientsNew from '../containers/new';
import PropTypes from 'prop-types';
import thunkMiddleware from 'redux-thunk';


const patientsNew = ({patient, errors}) => {
  const initialState = {patient: patient, errors: errors, posting: false, done: false};
  const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
  return <Provider store={store}>
    <PatientsNew />
  </Provider>
}

patientsNew.propTypes = {
  patient: PropTypes.shape({
    first_name: PropTypes.string,
    middle_name: PropTypes.string,
    last_name: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    mrn: PropTypes.string,
  }),
  errors: PropTypes.object
}

export default patientsNew;
