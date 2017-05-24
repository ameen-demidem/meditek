import PropTypes from 'prop-types';
import React from 'react';
import ReactOnRails from 'react-on-rails';

export default class PatientsNew extends React.Component {
  render () {
    console.log('Rendering PatientsNew');
    console.log('Errors, if any: ', this.props.errors);

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
        <div className={`field ${this.props.errors.first_name ? "field_with_errors" : null}`}>
          <label htmlFor="patient_first_name">First name</label><br/>
          <input type="text" name="patient[first_name]" id="patient_first_name"/>
        </div>
        <div className={`field ${this.props.errors.middle_name ? "field_with_errors" : null}`}>
          <label htmlFor="patient_middle_name">Middle name</label><br/>
          <input type="text" name="patient[middle_name]" id="patient_middle_name"/>
        </div>
        <div className={`field ${this.props.errors.last_name ? "field_with_errors" : null}`}>
          <label htmlFor="patient_last_name">Last name</label><br/>
          <input type="text" name="patient[last_name]" id="patient_last_name"/>
        </div>
        <div className={`field ${this.props.errors.weight ? "field_with_errors" : null}`}>
          <label htmlFor="patient_weight">Weight</label><br/>
          <input type="text" name="patient[weight]" id="patient_weight"/>
        </div>
        <div className={`field ${this.props.errors.height ? "field_with_errors" : null}`}>
          <label htmlFor="patient_height">Height</label><br/>
          <input type="number" name="patient[height]" id="patient_height"/>
        </div>
        <div className={`field ${this.props.errors.mrn ? "field_with_errors" : null}`}>
          <label htmlFor="patient_mrn">Mrn</label><br/>
          <input type="text" name="patient[mrn]" id="patient_mrn"/>
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
}
