class Note < ApplicationRecord
  validates :lab_title, presence: true
  belongs_to :user

end
