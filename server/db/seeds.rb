# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Like.delete_all
Tagging.delete_all
Tag.delete_all
User.delete_all
Answer.delete_all
Question.delete_all




PASSWORD='supersecret'
super_user=User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email: 'js@winterfell.gov',
    password: PASSWORD,
    address: '628 6th Avenue, New Westminster, BC, Canada',
)
User.create(
    first_name: 'Cheng',
    last_name: 'Pham',
    email: 'chengpham@gmail.com',
    password: 'Password0',
    address: '628 6th Avenue, New Westminster, BC, Canada',
    is_admin: true
)

10.times do
    first_name= Faker::Name.first_name 
    last_name= Faker::Name.last_name 
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}.#{last_name}@example.com",
        password: PASSWORD,
        address: '628 6th Avenue, New Westminster, BC, Canada'
    )
end
users=User.all

10.times do 
    Tag.create(
        name:Faker::Vehicle.make
    )
end

tags=Tag.all

50.times do
    created_at=Faker::Date.backward(days: 365*5)
    q=Question.create(
        title: Faker::Hacker.say_something_smart,
        body: Faker::ChuckNorris.fact,
        view_count: rand(100_000),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
# puts q.errors.full_messages
    if q.valid?
        q.answers = rand(0..15).times.map do 
            Answer.new(
                body: Faker::GreekPhilosophers.quote,
                user: users.sample
        )
        end
        q.likers=users.shuffle.slice(0,rand(users.count))
        q.tags= tags.shuffle.slice(0,rand(tags.count))
    end
end

puts "Questions Count: #{Question.count}"
puts "Answer Count: #{Answer.count}"
puts "User Count: #{User.count}"
puts "Like Count: #{Like.count}"
puts "Tags Count: #{Tag.count}"
puts "Login with #{super_user.email} and password: #{PASSWORD}."

# Some terminal commands to delete create and run migration and seed files

# rails db:drop This will delete database from psql
# rails db:create This will recreate a database
# rails db:migrate To run all the migrations
# rails db:seed To tun the seed file
# rails db:reset To do all above in oneshot you can use this command