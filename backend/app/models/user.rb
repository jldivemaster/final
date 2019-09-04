class User < ApplicationRecord
  has_secure_password
  validates_presence_of :username

  has_many :notes


  def full_name
    return self.first_name + " " + self.last_name
  end

end
