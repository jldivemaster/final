# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!(username: 'jgl', first_name: 'Jason', last_name: 'Leach', password: 'asdfasdf', password_confirmation: 'asdfasdf', location: 'Seattle', program: 'Software Engineering', current_mod: 5)

note1 = Note.create!(lab_title: 'Lab Notes 1', quick_ref: 'syntax for Rails Generator', body: 'Here are the notes I took for myself from this lab.', mod_num: 4, user_id: 1)
note2 = Note.create!(lab_title: 'Lab Notes 2', quick_ref: 'React Component overview', body: 'Blah blippety terniary blah.', mod_num: 4, user_id: 1)
note3 = Note.create!(lab_title: 'Lab Notes 3', quick_ref: 'syntax for fetch request', body: 'Here are the notes I took for myself from this lab.', mod_num: 3, user_id: 1)
note4 = Note.create!(lab_title: 'Lab Notes 4', quick_ref: 'React Functional Components', body: 'Blah blippety blah.', mod_num: 3, user_id: 1)
note5 = Note.create!(lab_title: 'Lab Notes 5', quick_ref: 'Javascript array methods', body: 'Here are the notes I took for myself from this lab.', mod_num: 2, user_id: 1)
note6 = Note.create!(lab_title: 'Lab Notes 6', quick_ref: 'Redux Component overview', body: 'React Blah blippety blah.', mod_num: 2, user_id: 1)
note7 = Note.create!(lab_title: 'Lab Notes 7', quick_ref: 'Ruby array methods', body: 'Here are the notes I took for myself from this lab.', mod_num: 1, user_id: 1)
note8 = Note.create!(lab_title: 'Lab Notes 8', quick_ref: 'React Props and State', body: 'Blah blippety blah.', mod_num: 0, user_id: 1)
note9 = Note.create!(lab_title: 'Lab Notes 9', quick_ref: 'terniary operator syntax', body: 'Here are the notes I took for myself from this lab.', mod_num: 1, user_id: 1)
note10 = Note.create!(lab_title: 'Lab Notes 10', quick_ref: 'Learning Sinatra sucks', body: 'Blah blippety blah.', mod_num: 0, user_id: 1)
