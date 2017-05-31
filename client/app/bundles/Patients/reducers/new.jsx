export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_PATIENT_FIELD':
      const patient = state.patient;
      patient[action.field] = action.newValue;
      return Object.assign({}, state, {patient});
    case 'UPDATE_ERRORS':
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
}
