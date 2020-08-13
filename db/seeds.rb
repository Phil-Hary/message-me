# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
	
users = User.create([
	{
		user_name: "Lebron James",
		email: "lebron@lakers.com",
		password: "123",
	},
	{
		user_name: "Lillard",
		email: "lebron@blazers.com",
		password: "123",
	}
])
