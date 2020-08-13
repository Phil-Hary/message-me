class User < ApplicationRecord
	has_many :messages
	validates :user_name, presence: true,
												length: { minimum:3, maximum:15 },
												uniqueness: { case_sensitive: false }

	VALIDATE_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	validates :email, presence: true,
										length: { maximum:105 },
										format: { with: VALIDATE_EMAIL_REGEX }

	has_secure_password
end	