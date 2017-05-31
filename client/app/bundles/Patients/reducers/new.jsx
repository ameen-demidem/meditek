export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_PATIENT_FIELD':
      const patient = state.patient;
      patient[action.field] = action.newValue;
      return Object.assign({}, state, {patient});
    case 'POST_PATIENT_DATA':
      return Object.assign({}, state, { posting: true });
    case 'POST_PATIENT_DATA_SUCCESS':
      return Object.assign({}, state, { posting: false, done: true });
    case 'POST_PATIENT_DATA_FAILURE':
      return Object.assign({}, state, { posting: false, errors: action.errors });
    default:
      return state;
  }
}
