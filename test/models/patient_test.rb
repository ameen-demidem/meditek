require 'test_helper'

class PatientTest < ActiveSupport::TestCase
  test "Should not save a patient without a first name" do
    patient = patients(:first_name_missing)
    assert_not patient.save
  end

  test "Should not save a patient without a last name" do
    patient = patients(:last_name_missing)
    assert_not patient.save
  end

  test "Should not save a patient without an mrn" do
    patient = patients(:mrn_missing)
    assert_not patient.save
  end
end
