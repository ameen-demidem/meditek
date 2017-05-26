json.extract! encounter, :id, :visit, :admitted_at, :discharged_at, :location, :room, :bed, :patient_id, :created_at, :updated_at
json.url patient_encounter_url(patient, encounter, format: :json)
