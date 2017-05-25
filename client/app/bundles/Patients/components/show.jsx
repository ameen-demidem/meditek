import PropTypes from 'prop-types';
import React from 'react';

export default class PatientsShow extends React.Component {
  static propTypes = {
    patient: PropTypes.object.isRequired,
    encounters: PropTypes.array
  };

  render() {
    const patient = this.props.patient;
    const encounters = this.props.encounters;

    return <div>
      <h1>Patient Details</h1>
      <p><strong>First name:</strong> {patient.first_name}</p>
      <p><strong>Middle name:</strong> {patient.middle_name}</p>
      <p><strong>Last name:</strong> {patient.last_name}</p>
      <p><strong>Weight:</strong> {patient.weight}</p>
      <p><strong>Height:</strong> {patient.height}</p>
      <p><strong>Mrn:</strong> {patient.mrn}</p>

      <h1>Patient Encounters</h1>
      <table cellPadding="5px">
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>Visit</th>
            <th style={{textAlign: 'left'}}>Admitted at</th>
            <th style={{textAlign: 'left'}}>Discharged at</th>
            <th style={{textAlign: 'center'}} colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody>
          { encounters.map(e => <Encounter key={e.id} encounter={e} patient={patient}/>) }
        </tbody>
      </table>
    </div>
  }
}

const Encounter = ({encounter, patient}) => (
  <tr>
    <td>{encounter.visit}</td>
    <td>{encounter.admitted_at}</td>
    <td>{encounter.discharged_at}</td>
    <td><a href={`/patients/${patient.id}/encounters/${encounter.id}`}>Show</a></td>
    <td><a href={`/patients/${patient.id}/encounters/${encounter.id}/edit`}>Edit</a></td>
    <td>
      <a
        data-confirm="Are you sure?"
        rel="nofollow"
        data-method="delete"
        href={`/patients/${patient.id}/encounters/${encounter.id}`}
      >
        Destroy
      </a>
    </td>
  </tr>
)
