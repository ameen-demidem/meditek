import PropTypes from 'prop-types';
import React from 'react';

export default class EncountersShow extends React.Component {
  static propTypes = {
    patient: PropTypes.object.isRequired,
    encounter: PropTypes.object
  };

  render() {
    const patient = this.props.patient;
    const encounter = this.props.encounter;

    return <div>
      <h1>Encounter Details</h1>
      <p><strong>Visit:</strong> {encounter.visit}</p>
      <p><strong>Admitted at:</strong> {encounter.admitted_at}</p>
      <p><strong>Discharged at:</strong> {encounter.discharged_at}</p>
      <p><strong>Location:</strong> {encounter.location}</p>
      <p><strong>Room:</strong> {encounter.room}</p>
      <p><strong>Bed:</strong> {encounter.bed}</p>
    </div>
  }
}

