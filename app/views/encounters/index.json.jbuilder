json.array! @encounters do |encounter|
  json.partial! 'encounters/encounter', encounter: encounter, patient: @patient
end
