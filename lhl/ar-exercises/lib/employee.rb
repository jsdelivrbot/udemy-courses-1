class Employee < ActiveRecord::Base

  belongs_to :store

  validates :store, presence: true 
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :hourly_rate, inclusion: 40..200

end
