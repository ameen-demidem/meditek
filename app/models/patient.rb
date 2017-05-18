class Patient < ActiveRecord::Base
  validates :first_name, :last_name, :mrn, presence: true
  validates :weight, :height, numericality: true
end
