json.extract! patient, :id, :first_name, :middle_name, :last_name, :weigth, :height, :mrn, :created_at, :updated_at
json.url patient_url(patient, format: :json)