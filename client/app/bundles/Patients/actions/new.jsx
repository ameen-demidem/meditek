import axios from 'axios';

export const updateField = (field, newValue) => ({
  type: 'UPDATE_PATIENT_FIELD',
  field: field,
  newValue: newValue
})

const updateErrors = (errors) => ({
  type: 'POST_PATIENT_DATA_FAILURE',
  errors: errors
})

const postPatientData = () => ({
  type: 'POST_PATIENT_DATA',
})

const redirect = () => ({
  type: 'POST_PATIENT_DATA_SUCCESS',
})

export const addPatient = () => (dispatch, getState) => {
  dispatch(postPatientData());
  return axios
    .post('/patients.json', getState().patient)
    .then((response) => dispatch(redirect()))
    .catch((error) => { throw error.response.data })
    .catch((errors) => dispatch(updateErrors(errors)))
}
