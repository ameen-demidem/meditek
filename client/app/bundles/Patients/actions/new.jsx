export const updateField = (field, newValue) => ({
  type: 'UPDATE_PATIENT_FIELD',
  field: field,
  newValue: newValue
})

export const updateErrors = (errors) => ({
  type: 'UPDATE_ERRORS',
  errors: errors
})
