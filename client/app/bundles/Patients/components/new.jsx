import PropTypes from 'prop-types';
import React from 'react';
import ReactOnRails from 'react-on-rails';

export default class PatientsNew extends React.Component {
  constructor (props) {
    super(props);

    const patient = this.props.patient;

    this.state = {
      firstName: patient.first_name || '',
      lastName: patient.last_name || '',
      middleName: patient.middle_name || '',
      weight: patient.weight || '',
      height: patient.height || '',
      mrn: patient.mrn || ''
    }
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
      <form
        className="new_patient"
        id="new_patient"
        action="/patients"
        acceptCharset="UTF-8"
        method="post"
      >
      <input name="utf8" type="hidden" value="✓"/>
        <input
          type="hidden"
          name="authenticity_token"
          value={`${ReactOnRails.authenticityToken()}`}
        />
        <div className={styles.firstName}>
          <label htmlFor="patient_first_name">First name</label><br/>
          <input
            value={this.state.firstName}
            onChange={this.inputOnChange}
            type="text"
            name="patient[first_name]"
            id="patient_first_name"
          />
        </div>
        <div className={styles.middleName}>
          <label htmlFor="patient_middle_name">Middle name</label><br/>
          <input
            value={this.state.middleName}
            onChange={this.inputOnChange}
            type="text"
            name="patient[middle_name]"
            id="patient_middle_name"/>
        </div>
        <div className={styles.lastName}>
          <label htmlFor="patient_last_name">Last name</label><br/>
          <input
            value={this.state.lastName}
            onChange={this.inputOnChange}
            type="text"
            name="patient[last_name]"
            id="patient_last_name"/>
        </div>
        <div className={styles.weight}>
          <label htmlFor="patient_weight">Weight</label><br/>
          <input
            value={this.state.weight}
            onChange={this.inputOnChange}
            type="text"
            name="patient[weight]"
            id="patient_weight"/>
        </div>
        <div className={styles.height}>
          <label htmlFor="patient_height">Height</label><br/>
          <input
            value={this.state.height}
            onChange={this.inputOnChange}
            type="number"
            name="patient[height]"
            id="patient_height"/>
        </div>
        <div className={styles.mrn}>
          <label htmlFor="patient_mrn">Mrn</label><br/>
          <input
            value={this.state.mrn}
            onChange={this.inputOnChange}
            type="text"
            name="patient[mrn]"
            id="patient_mrn"/>
        </div>
        <div className="actions">
          <input type="submit" name="commit" value="Create Patient"/>
          <input type="submit" name="cancel" value="Cancel" onClick={this.cancel}/>
        </div>
      </form>
    )
  }

  cancel = () => {
    window.history.back();
  }

  inputOnChange = (e) => {
    const lut = {
      "patient[first_name]": "firstName",
      "patient[middle_name]": "middleName",
      "patient[last_name]": "lastName",
      "patient[weight]": "weight",
      "patient[height]": "height",
      "patient[mrn]": "mrn",
    }
    var state = this.state;
    state[lut[e.target.name]] = e.target.value;
    this.setState(state)
  }
}
