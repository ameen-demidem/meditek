import PropTypes from 'prop-types';
import React from 'react';

export default class PatientsIndex extends React.Component {
  static propTypes = {
    patients: PropTypes.array.isRequired
  };

  render() {
    return <div>
      <h1>Patient List</h1>
      <form style={{marginBottom: '10px'}} action="/patients/new">
        <input type='submit' value='Add Patient'/>
      </form>
      <table cellPadding="5px">
        <thead><tr>
          <th style={{textAlign: 'left'}}>MRN</th>
          <th style={{textAlign: 'left'}}>First Name</th>
          <th style={{textAlign: 'left'}}>Last Name</th>
          <th style={{textAlign: 'center'}} colSpan='3'>Actions</th>
        </tr></thead>
        <tbody>
          { this.props.patients.map(p => <Patient key={p.id} patient={p}/>) }
        </tbody>
      </table>
    </div>
  }
}

const Patient = ({patient}) => (
  <tr>
    <td>{patient.mrn}</td>
    <td>{patient.first_name}</td>
    <td>{patient.last_name}</td>
    <td><a href={`/patients/${patient.id}`}>Show</a></td>
    <td><a href={`/patients/${patient.id}/edit`}>Edit</a></td>
    <td>
      <a
        data-confirm="Are you sure?"
        rel="nofollow"
        data-method="delete"
        href={`/patients/${patient.id}`}
      >
        Destroy
      </a>
    </td>
  </tr>
);
