# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'jgl', first_name: 'Jason', last_name: 'Leach', password: 'asdfasdf', password_confirmation: 'asdfasdf', location: 'Seattle', program: 'Software Engineering')

note1 = Note.create!(lab_title: 'Lab Notes 1', quick_ref: 'syntax for fetch request', body: 'Here are the notes I took for myself from this lab.', mod_num: 4, user_id: 1)
note2 = Note.create!(lab_title: 'Lab Notes 2', quick_ref: 'React Component overview', body: 'Blah blippety blah.', mod_num: 4, user_id: 1)
