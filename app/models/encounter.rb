class Encounter < ActiveRecord::Base
  validates :visit, :admitted_at, presence: true

  belongs_to :patient
end
