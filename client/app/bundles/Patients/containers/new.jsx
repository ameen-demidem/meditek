import React from 'react';
import { connect } from 'react-redux';
import PatientsNew from '../components/new';
import reducer from '../reducers/new';
import { updateField, addPatient } from '../actions/new';

const mapStateToProps = (state) => ({
  patient : {
    first_name: state.patient.first_name || '',
    last_name: state.patient.last_name || '',
    middle_name: state.patient.middle_name || '',
    weight: state.patient.weight,
    height: state.patient.height,
    mrn: state.patient.mrn || ''
  },
  errors: state.errors,
  posting: state.posting,
  done: state.done,
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (field, newValue) => { dispatch(updateField(field, newValue)) },
  addPatient: () => { dispatch(addPatient()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsNew);
