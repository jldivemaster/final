class User < ApplicationRecord
  has_many :notes
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 4 }, on: :create
  validates :current_mod, numericality: { only_integer: true, greater_than: -1 }, :if => :current_mod
  has_secure_password

  def full_name
    return self.first_name + " " + self.last_name
  end

end
