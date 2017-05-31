import React from 'react';
import { connect } from 'react-redux';
import PatientsNew from '../components/new';
import reducer from '../reducers/new';
import { updateField, updateErrors } from '../actions/new';

const mapStateToProps = (state) => ({
  patient : {
    first_name: state.patient.first_name || '',
    last_name: state.patient.last_name || '',
    middle_name: state.patient.middle_name || '',
    weight: state.patient.weight,
    height: state.patient.height,
    mrn: state.patient.mrn || ''
  },
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (field, newValue) => { dispatch(updateField(field, newValue)) },
  onError: (errors) => { dispatch(updateErrors(errors)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsNew);
