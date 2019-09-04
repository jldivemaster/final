class User < ApplicationRecord
  has_many :notes
  validates_presence_of :username
  validates :current_mod, numericality: { only_integer: true, greater_than: -1 }
  has_secure_password

  def full_name
    return self.first_name + " " + self.last_name
  end

end
