require 'faker'

puts 'Clearing database'
User.destroy_all
Bounty.destroy_all

puts 'Generating Users'
10.times do
    User.create!(
        email: "#{Faker::Name.unique.first_name}@example.com",
        username: Faker::Name.name,
        password: 'test123'
    )
end

puts 'Generating Bounties'
20.times do |i|
    bounty = Bounty.new(
        description: Faker::Game.title,
        price: rand(1000...20000)
        )
        
    bounty.photo_url = "https://source.unsplash.com/featured/300x20#{i}"
    bounty.user = User.all.sample
    bounty.save!
end

puts 'Done'