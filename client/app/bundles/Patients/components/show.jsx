import PropTypes from 'prop-types';
import React from 'react';

export default class PatientsShow extends React.Component {
  static propTypes = {
    patient: PropTypes.object.isRequired
  };

  render() {
    const patient = this.props.patient;

    return <div>
      <p><strong>First name:</strong> {patient.first_name}</p>
      <p><strong>Middle name:</strong> {patient.middle_name}</p>
      <p><strong>Last name:</strong> {patient.last_name}</p>
      <p><strong>Weight:</strong> {patient.weight}</p>
      <p><strong>Height:</strong> {patient.height}</p>
      <p><strong>Mrn:</strong> {patient.mrn}</p>
    </div>
  }
}
