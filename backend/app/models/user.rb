class User < ApplicationRecord
  has_many :notes
  validates_presence_of :username
  has_secure_password

  def full_name
    return self.first_name + " " + self.last_name
  end

end
