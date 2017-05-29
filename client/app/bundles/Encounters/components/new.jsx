import PropTypes from 'prop-types';
import React from 'react';
import ReactOnRails from 'react-on-rails';
import axios from 'axios';

export default class EncountersNew extends React.Component {
  static propTypes = {
    encounter: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);

    this.state = {
      encounter: this.props.encounter,
      errors: null
    }
  }

  render () {
    const styles = {
      visit: "field",
      admitted_at: "field",
      discharged_at: "field",
      location: "field",
      room: "field",
      bed: "field"
    }

    const errors = this.state.errors;
    let errorMessages = {};
    if (errors) {
      for (let e in errors) {
        styles[e] += " field_with_errors";
        errorMessages[e] = errors[e][0];
      }
    }

    return <div>
      <h1>New Encounter</h1>
      <div className={styles.visit}>
        <label htmlFor="visit">
          { `Visit${errorMessages.visit ? ' ' + errorMessages.visit : ''}` }
        </label>
        <br/>
        <input
          onChange={this.inputOnChange}
          type="text"
          value={this.state.encounter.visit}
          name="visit"
          id="visit"
        />
      </div>
      <div className={styles.admitted_at}>
        <label htmlFor="admitted_at">
          { `Admitted at${errorMessages.admitted_at ? ' ' + errorMessages.admitted_at : ''}` }
        </label>
        <br/>
        <input
          onChange={this.inputOnChange}
          type="datetime-local"
          value={this.state.encounter.admitted_at}
          name="admitted_at"
          id="admitted_at"
        />
      </div>
      <div className={styles.discharged_at}>
        <label htmlFor="discharged_at">Discharged at</label><br/>
        <input
          onChange={this.inputOnChange}
          type="datetime-local"
          value={this.state.encounter.discharged_at}
          name="discharged_at"
          id="discharged_at"
        />
      </div>
      <div className={styles.location}>
        <label htmlFor="location">Location</label><br/>
        <input
          onChange={this.inputOnChange}
          type="text"
          value={this.state.encounter.location}
          name="location"
          id="location"
        />
      </div>
      <div className={styles.room}>
        <label htmlFor="room">Room</label><br/>
        <input
          onChange={this.inputOnChange}
          type="number"
          value={this.state.encounter.room}
          name="room"
          id="room"
        />
      </div>
      <div className={styles.bed}>
        <label htmlFor="bed">Bed</label><br/>
        <input
          onChange={this.inputOnChange}
          type="number"
          value={this.state.encounter.bed}
          name="bed"
          id="bed"
        />
      </div>
      <div className="actions">
        <button onClick={this.addEncounter} style={{marginRight: "10px"}}>Add Encounter</button>
        <button onClick={this.done}>Cancel</button>
      </div>
    </div>
  }

  inputOnChange = (e) => {
    let encounter = this.state.encounter;
    encounter[e.target.name] = e.target.value;
    this.setState({encounter: encounter});
  }

  done = () => {
    window.location.href = `/patients/${this.props.patient.id}`;
  }

  addEncounter = () => {
    console.log(this.state);

    const patienId = this.props.patient.id;
    const endPoint = `/patients/${patienId}/encounters.json`;

    axios
      .post(endPoint, this.state)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  handleSuccess = (response) => {
    this.done();
  }

  handleError = (error) => {
    console.log(error.response.data);
    this.setState({errors: error.response.data});
  }
}

