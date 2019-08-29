class User < ApplicationRecord
  has_many :notes
  validates_presence_of :first_name, :last_name

  def full_name
    return self.first_name + " " + self.last_name
  end

end
