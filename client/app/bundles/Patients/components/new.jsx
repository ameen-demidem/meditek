import PropTypes from 'prop-types';
import React from 'react';
import ReactOnRails from 'react-on-rails';
import axios from 'axios';

export default class PatientsNew extends React.Component {

  static propTypes = {
    patient: PropTypes.shape({
      first_name: PropTypes.string,
      middle_name: PropTypes.string,
      last_name: PropTypes.string,
      weight: PropTypes.number,
      height: PropTypes.number,
      mrn: PropTypes.string,
    }),
    errors: PropTypes.object,
    onFieldChange: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
  }

  render () {
    var styles = {
      firstName : `field ${this.props.errors.first_name ? "field_with_errors" : null}`,
      middleName : `field ${this.props.errors.middle_name ? "field_with_errors" : null}`,
      lastName : `field ${this.props.errors.last_name ? "field_with_errors" : null}`,
      weight : `field ${this.props.errors.weight ? "field_with_errors" : null}`,
      height : `field ${this.props.errors.height ? "field_with_errors" : null}`,
      mrn : `field ${this.props.errors.mrn ? "field_with_errors" : null}`
    }

    return (
      <div>
        <input name="utf8" type="hidden" value="✓"/>
        <input
          type="hidden"
          name="authenticity_token"
          value={`${ReactOnRails.authenticityToken()}`}
        />
        <div className={styles.firstName}>
          <label htmlFor="patient_first_name">First name</label><br/>
          <input
            value={this.props.patient.first_name}
            onChange={this.inputOnChange}
            type="text"
            name="first_name"
            id="patient_first_name"
          />
        </div>
        <div className={styles.middleName}>
          <label htmlFor="patient_middle_name">Middle name</label><br/>
          <input
            value={this.props.patient.middle_name}
            onChange={this.inputOnChange}
            type="text"
            name="middle_name"
            id="patient_middle_name"/>
        </div>
        <div className={styles.lastName}>
          <label htmlFor="patient_last_name">Last name</label><br/>
          <input
            value={this.props.patient.last_name}
            onChange={this.inputOnChange}
            type="text"
            name="last_name"
            id="patient_last_name"/>
        </div>
        <div className={styles.weight}>
          <label htmlFor="patient_weight">Weight</label><br/>
          <input
            value={this.props.patient.weight}
            onChange={this.inputOnChange}
            type="number"
            name="weight"
            id="patient_weight"/>
        </div>
        <div className={styles.height}>
          <label htmlFor="patient_height">Height</label><br/>
          <input
            value={this.props.patient.height}
            onChange={this.inputOnChange}
            type="number"
            name="height"
            id="patient_height"/>
        </div>
        <div className={styles.mrn}>
          <label htmlFor="patient_mrn">Mrn</label><br/>
          <input
            value={this.props.patient.mrn}
            onChange={this.inputOnChange}
            type="text"
            name="mrn"
            id="patient_mrn"/>
        </div>
        <div className="actions">
          <button onClick={this.addPatient}>Create Patient</button>
          <button onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    )
  }

  cancel = (e) => {
    window.location.href = '/patients';
  }

  inputOnChange = (e) => {
    this.props.onFieldChange(e.target.name, e.target.value);
  }

  addPatient = () => {
    const endPoint = '/patients.json';

    axios
      .post(endPoint, this.props.patient)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  handleSuccess = (response) => {
    window.location.href = '/patients';
  }

  handleError = (error) => {
    this.props.onError(error.response.data);
  }
}
